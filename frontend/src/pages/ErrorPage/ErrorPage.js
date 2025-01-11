import React from 'react';
import styles from './ErrorPage.module.css';
import { useNavigate } from "react-router-dom";
import clover from '../../assets/images/Intro/fourLeafClover.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  // 홈으로 돌아가는 함수
  const handleGoHome = () => {
    navigate('/'); // 홈으로 이동
  };

  return (
    <div className={styles.container}>
      <div className={styles.clover}>
        <img src={clover} alt="CLOVER" className={styles.backImg} />
        <div className={styles.backText}>
          <div style={{fontSize:"clamp(24px,8vw, 54px)"}}>404</div>
          오류가 발생하였습니다.
        </div>
      </div>
      <div className={styles.home} onClick={handleGoHome}>
        첫 화면으로 돌아가기
      </div>
    </div>
  );
}

export default ErrorPage;
