import styles from './Main.module.css';
import Button from '../../components/common/button/button';
import star from '../../assets/images/Intro/shootingStar.svg';
import { LuNotebookPen } from "react-icons/lu";
//import { handleKakaoShare } from '../../Utils/Intro/kakaoLogin/KakaoShare';
import React, { useEffect } from 'react';
const kakaoKey = process.env.REACT_APP_KAKAO_APP_KEY;
const Main = () => {
     
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  return (
    <div className={styles.container}>
      <div className={styles.clover}>
        <img src={star} alt="shootingStar" className={styles.mainImg} />
      </div>
      <div className={styles.title}>
        버킷 노트
        <LuNotebookPen style={{ marginLeft: "2vw", fontSize: "clamp(20px, 4vw, 32px)" }} />
      </div>
      <div className={styles.context}>
        올해 꼭 이루고 싶은 목표를 적어주세요. <br />
        잊고 지낸 목표를 연말에 상기시켜드립니다.
      </div>
      <div className={styles.buttonContainer}>
        {/* 링크 수정: userId를 동적으로 삽입 */}
        <Button text={"내 버킷노트로"} link={`/mypage/${userId}`} />
        <Button text={"친구 버킷노트 찾기"} link="/search" />
        {/*<button onClick={handleKakaoShare}>예시</button>*/}
      </div>
    </div>
  );
}

export default Main;
