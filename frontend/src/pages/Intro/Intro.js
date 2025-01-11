import React from 'react';
import styles from './Intro.module.css';
import { useNavigate } from "react-router-dom";



const Intro = () => {
  const navigate = useNavigate();
  const Login = () => {
    console.log("로그인 버튼 클릭");
    navigate("/main");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Bucket Note
      </div>
      <img src={require('../../assets/images/Intro/shootingStar.png')} alt="shootingStar" className={styles.titleImg} />
      <div className={styles.clover}>
        <img src={require('../../assets/images/Intro/fourLeafClover.png')} alt="CLOVER" className={styles.backImg} />
        <div className={styles.backText}>
          1년간의 목표를 기록하고<br/>
          친구의 목표를<br/>
          확인해보세요!!
        </div>
      </div>
      <div style={{display: "flex", alignContent: "center", justifyContent:"center"}}>
        <img src={require('../../assets/images/Intro/kakaoLoginButton.png')} alt="login" className={styles.button} onClick={Login}/>
      </div>
    </div>
  );
}

export default Intro;
