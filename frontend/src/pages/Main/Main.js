import React from 'react';
import styles from './Main.module.css';
import Button from '../../components/common/button/button';
const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.clover}>
        <img src={require('../../assets/images/Intro/shootingStar.png')} alt="shootingStar" className={styles.mainImg} />
      </div>
      <div className={styles.title}>
        버킷 노트
      </div>
      <div className={styles.context}>
      올해 꼭 이루고 싶은 목표를 적어주세요. <br/>
      잊고 지냈던 목표를 연말에 다시 알려드립니다.
      </div>
      <div className={styles.buttonContainer}> 
        <Button text={"내 버킷노트로"} link={"/mypage"}/>
        <Button text={"친구 버킷노트 찾기"} link={"/search"}/>
      </div>
    </div>
  );
}

export default Main;
