import React from 'react';
import styles from './DetailPage.module.css';
import Button from '../../../components/common/button/button';
import {  FaArrowCircleUp, FaTimes } from "react-icons/fa";
import { CgShapeCircle } from "react-icons/cg";

const DetailPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                내 버킷노트
            </div>
        </div>
        <div className={styles.context}>
            선택한 목표의 세부사항을 확인해보세요!
        </div>
        <div className={styles.goal}>
            삐약톤 수상하기
        </div>
        <div className={styles.voteContainer}>
            <div>
                이 목표를 달성할 수 있을지 투표해보세요!
            </div>
            <div className={styles.voteButtonContainer}>
                <div className={styles.voteButton}>
                    <CgShapeCircle size={"15vw"} color='#0022FF'/>
                </div>
                <div className={styles.voteButton} >
                    <FaTimes size={"15vw"} color='#FF0000'/>
                </div>
            </div>
        </div>
        <div className={styles.commentsContainer}>
            <div className={styles.inputField}>
                <input type="text" placeholder="응원 댓글 남기기" className={styles.input} />
                <FaArrowCircleUp className={styles.icon} />
            </div>
            <div>
                <div>list1</div>
                <div>list2</div>
                <div>list3</div>
            </div>
        </div>
        <div className={styles.buttonContainer}>
            <Button text={"작성 완료하기"} link={"/mypage"}/>
        </div>
    </div>
  );
}

export default DetailPage;
