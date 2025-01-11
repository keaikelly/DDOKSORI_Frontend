import React, { useEffect } from 'react';
import styles from './Intro.module.css';
import { useNavigate } from "react-router-dom";
import star from "../../assets/images/Intro/shootingStar.svg";
import { handleKakaoLogin } from '../../components/Intro/kakaoLogin/KakaoLogin';

const kakaoKey = process.env.REACT_APP_KAKAO_APP_KEY;


const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(kakaoKey);  // 정상적으로 출력되는지 확인
    // 카카오 SDK 초기화
    if (window.Kakao) {
      window.Kakao.init(kakaoKey); 
    }
  }, []);

  const Login = () => {
    console.log("로그인 버튼 클릭");
    handleKakaoLogin(navigate); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          Bucket Note
        </div>
        <img src={star} alt="shootingStar" className={styles.titleImg} />
      </div>
      <div className={styles.clover}>
        <img 
          src={require('../../assets/images/Intro/fourLeafClover.png')} 
          alt="CLOVER" 
          className={styles.backImg} 
        />
        <div className={styles.backText}>
          1년동안 이룰 목표를 기록하고<br/>
          친구의 목표를<br/>
          확인해 보세요!!
        </div>
      </div>
      <div style={{display: "flex", alignContent: "center", justifyContent:"center"}}>
        <img 
          src={require('../../assets/images/Intro/kakaoLoginButton.png')} 
          alt="login" 
          className={styles.button} 
          onClick={Login}
        />
      </div>
    </div>
  );
};

export default Intro;
