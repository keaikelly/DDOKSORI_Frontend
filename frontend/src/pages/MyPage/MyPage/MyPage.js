import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import styles from "./MyPage.module.css";
import SmallButton from "../../../components/common/smallButton/smallButton";
import ListComponent from "../../../components/MyPage/listComponent/listComponent";
import PlusListComponent from "../../../components/MyPage/listComponent/plusListComponent.js";
import BackButton from "../../../components/common/backbutton/backbutton.js";
import InputPopup from "../../../components/common/InputPopup/InputPopup.js";
import { IoMdShare } from "react-icons/io";
import EditButton from "../../../components/MyPage/editButton/editButton.js";
import NickName from "../../../components/common/button/nickname.jsx";
import { getBucketList } from "../../../Utils/MyPage/getBucketList.js";
import { createBucketList } from "../../../Utils/MyPage/createBucketList.js";
import { handleKakaoShare } from "../../../Utils/Intro/kakaoLogin/KakaoShare.js";
const MyPage = () => {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [isMine, setIsMine] = useState(true);
  const [datas, setDatas] = useState([]); // 상태 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const kakaoKey = process.env.REACT_APP_KAKAO_APP_KEY;
  useEffect(() => {
    console.log("id");
    console.log(id);
    const fetchData = async () => {
      if (token && id && userId) {
        try {
          // 버킷리스트 데이터를 가져옵니다.
          const data = await getBucketList(token, id, setLoading);
          // userId와 id를 비교하여 isMine 상태를 설정합니다.
          setIsMine(userId === id);
          setDatas(data);  // 받아온 데이터를 상태에 저장
        } catch (error) {
          console.error("데이터를 가져오는 중 오류 발생:", error);
        }
      }
    };

    fetchData();
  }, [token, id, userId]);
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey); // 실제 앱 키로 대체
  }
  
  const handlePopupOpen = () => {
    setShowPopup(true); // 팝업 열기
  };

  const handlePopupClose = () => {
    setShowPopup(false); // 팝업 닫기
  };

  const handleCreateBucketList = async (text) => {
    try {
      await createBucketList(token, text, setLoading); // 목표를 생성
      const updatedData = await getBucketList(token, id, setLoading); // 최신 데이터 가져오기
      setDatas(updatedData); // 상태 업데이트
    } catch (error) {
      console.error("목표 생성 중 오류:", error);
    }
  };

  return (
    <div className={styles.container}>
      {showPopup && (
        <InputPopup
          title={"나의 목표 입력하기"}
          text={"목표 입력하기"}
          buttonText={"목표 저장하기"}
          close={handlePopupClose}
          onClick={handleCreateBucketList} // 팝업에서 데이터를 전달받아 생성
        />
      )}

      <div className={styles.titleContainer}>
        <BackButton />
        <div className={styles.title}>{isMine ? "내 버킷노트" : "친구 버킷노트"}</div>
      </div>
      {isMine ? <NickName /> : null}
      <div className={styles.context}>
        {isMine ? (
          <>
            올해 꼭 이루고 싶은 목표를 적어주세요. <br /> 1월까지 작성 및 수정이 가능합니다.
          </>
        ) : (
          <>
            친구가 이루고자 하는 목표에요!
            <br />
            달성 여부를 맞추고 친구를 응원해 보아요!
          </>
        )}
      </div>

      <div className={styles.listContainer}>
        <div className={styles.listComponents}>
          <div className={styles.icon}>
            <IoMdShare onClick={handleKakaoShare}/>
            {/*isMine ? <EditButton link="/editlist" /> : null*/}
            {/* 수정 버튼 삭제 */}
          </div>
          {isMine && <PlusListComponent onClick={handlePopupOpen} />}
          
          {/* datas가 빈 배열이거나 데이터가 없을 때도 안전하게 처리 */}
          {datas && datas.length > 0 ? (
            datas.map((data) => (
              <ListComponent key={data.id} text={data.goalText}   link={`/detail/${data.id}?text=${encodeURIComponent(data.goalText)}`}  />
            ))
          ) : (
            <div>버킷리스트가 없습니다.</div>
          )}
        </div>
        <SmallButton text={"이전 노트 보기"} link={"/myprevious"} />
      </div>
    </div>
  );
};

export default MyPage;
