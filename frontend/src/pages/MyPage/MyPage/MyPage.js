import React from 'react';
import styles from './MyPage.module.css';
import Button from '../../../components/common/button/button';
const MyPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
            내 버킷노트
        </div>
        <div className={styles.small}>
            이전 노트 보기
        </div>
      </div>
      <div className={styles.context}>
      올해 꼭 이루고 싶은 목표를 적어주세요. <br/>
      1월 까지 작성 및 수정이 가능합니다.
      </div>
      <div className={styles.listContainer}> 
        <div>do it</div>
      </div>
        <Button text={"작성 완료하기"} link={"/"}/>
    </div>
  );
}

export default MyPage;
