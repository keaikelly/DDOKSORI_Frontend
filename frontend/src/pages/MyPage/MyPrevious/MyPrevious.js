import React, { useEffect, useState } from "react";
import styles from "./MyPrevious.module.css";
import BackButton from "../../../components/common/backbutton/backbutton";
import PreviousList from "../../../components/MyPage/previousList/previousList";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import NickName from "../../../components/common/button/nickname";
import { getBucketList } from "../../../Utils/MyPage/getBucketList.js";
import { isAchieved } from "../../../Utils/MyPage/isAchieved.js";

// 성공/실패 아이콘 정의
const success = <FaRegCheckCircle color="#0022FF" />;
const failure = <FiXCircle color="#FF0000" />;

const MyPrevious = () => {
  const [datas, setDatas] = useState([]); // 상태 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태 초기값
  const [error, setError] = useState(null); // 에러 상태 관리

  // 로컬 저장소에서 토큰 및 사용자 ID 가져오기
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      if (token && userId) {
        try {
          // 버킷리스트 데이터 가져오기
          const bucketList = await getBucketList(token, userId, setLoading);
          console.log("버킷리스트 데이터:", bucketList);

          // 성공/실패 상태 추가
          const dataWithStatus = await Promise.all(
            bucketList.map(async (item) => {
              const isAchievedResult = await isAchieved(token, item.id, setLoading);
              return {
                ...item,
                status: isAchievedResult, // 성공 여부 그대로 추가
              };
            })
          );

          console.log("상태가 추가된 데이터:", dataWithStatus);
          setDatas(dataWithStatus); // 상태 업데이트
          setLoading(false);
        } catch (error) {
          console.error("데이터를 가져오는 중 오류 발생:", error);
          setError("버킷리스트를 가져오는 데 실패했습니다.");
          setLoading(false);
        }
      } else {
        setError("로그인 정보가 없습니다.");
        setLoading(false);
      }
    };

    fetchData();
  }, [token, userId]);

  // 로딩 상태 표시
  if (loading) return <div className={styles.loading}>로딩 중...</div>;
  // 에러 상태 표시
  if (error) return <div>{error}</div>;

  // createdYear 기준으로 데이터 그룹화 (2025년 데이터 제외)
  const groupedData = datas.reduce((acc, item) => {
    if (item.createdYear === 2025) {
      return acc; // 2025년 데이터는 추가하지 않음
    }
    
    
    if (!acc[item.createdYear]) {
      acc[item.createdYear] = {
        array: [],
        icons: [],
      };
    }
    acc[item.createdYear].array.push(item.goalText); // goalText 추가
    acc[item.createdYear].icons.push(item.status); // 성공/실패 상태 추가
    return acc;
  }, {});

  // 그룹화된 데이터가 비어있을 경우 메시지 표시
  if (Object.keys(groupedData).length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <BackButton className={styles.BackButton} link={"/mypage"} />
          <div className={styles.title}>내 이전 버킷노트</div>
        </div>
        <NickName />
        <div className={styles.context}>이전의 버킷노트를 확인해보세요!</div>
        <div className={styles}><div className={styles.emptyMessage}>
          이전 버킷노트가 없습니다.
        </div></div>
        
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <BackButton className={styles.BackButton} link={"/mypage"} />
        <div className={styles.title}>내 이전 버킷노트</div>
      </div>
      <NickName />
      <div className={styles.context}>이전의 버킷노트를 확인해보세요!</div>
      <div className={styles.listContainer}>
        <div className={styles.listComponents}>
          {Object.entries(groupedData).map(([year, data]) => (
            <PreviousList
              key={year} // 연도를 key로 사용
              year={year} // 연도
              array={data.array} // 목표 텍스트 배열
              icon={data.icons.map((status) => {
                if (status === undefined) {
                  return success; // 상태가 undefined이면 success 아이콘
                } else if (status === false) {
                  return failure; // 상태가 false이면 failure 아이콘
                } else {
                  return success; // 다른 상태는 기본적으로 success
                }
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPrevious;
