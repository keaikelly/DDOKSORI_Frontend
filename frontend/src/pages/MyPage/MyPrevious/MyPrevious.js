import React, { useEffect, useState } from "react";
import styles from "./MyPrevious.module.css";
import BackButton from "../../../components/common/backbutton/backbutton";
import PreviousList from "../../../components/MyPage/previousList/previousList";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import NickName from "../../../components/common/button/nickname";
import { getBucketList } from "../../../Utils/MyPage/getBucketList.js";
import { isAchieved } from "../../../Utils/MyPage/isAchieved.js"

const success = <FaRegCheckCircle color="#0022FF" />;
const failure = <FiXCircle color="#FF0000"/>;

const iconArray = [
  [success, failure, success],
  [failure, failure, success],
  [success, failure, success],
  [failure, failure, failure],
];

const MyPrevious = () => {
  const [datas, setDatas] = useState([]); // 상태 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태 초기값
  const [error, setError] = useState(null); // 에러 상태 관리

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      if (token && userId) {
        try {
          const response = await getBucketList(token, userId, setLoading); // getBucketList 호출

          console.log("리스트 데이터:", response);
          setDatas(response || []); // 받아온 데이터를 상태에 저장
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

  if (loading) return <div className={styles.loading}>로딩 중...</div>; // 로딩 상태 표시
  if (error) return <div>{error}</div>; // 에러 상태 표시

  // createdYear 기준으로 데이터 그룹화
  const groupedData = datas
    .filter((item) => item.createdYear !== 2025) // 2025 제외
    .reduce((acc, item) => {
      if (!acc[item.createdYear]) {
        acc[item.createdYear] = {
          array: [],
          icons: [],
        };
      }
      acc[item.createdYear].array.push(item.goalText); // goalText 추가
      acc[item.createdYear].icons.push(...(item.icons || [])); // icons 추가
      return acc;
    }, {});

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
              icon={data.icons.map((status) =>
                status === "success" ? success : failure
              )} // 아이콘 배열 매핑
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPrevious;
