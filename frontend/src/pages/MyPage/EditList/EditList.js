import React, { useState } from "react";
import styles from "./EditList.module.css";
import SmallButton from "../../../components/common/smallButton/smallButton";
import ListComponent from "../../../components/MyPage/listComponent/listComponent";
import PlusListComponent from "../../../components/MyPage/listComponent/plusListComponent.js";
import BackButton from "../../../components/common/backbutton/backbutton.js";
import InputPopup from "../../../components/common/InputPopup/InputPopup.js";
import { IoShareSocialSharp } from "react-icons/io5";
import EditButton from "../../../components/MyPage/editButton/editButton.js";
import EditList from "../../../components/MyPage/editList/editList.js"
import { FaArrowDown } from "react-icons/fa";

import API from "../../../API/api.js";

const MyPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMine, setIsMine] = useState(true);

  const handlePopupOpen = () => {
    setShowPopup(true); // 팝업 열기
  };

  const handlePopupClose = () => {
    setShowPopup(false); // 팝업 닫기
  };

  return (
    <div className={styles.container}>
      {showPopup && (
        <InputPopup 
          title={"나의 목표 입력하기"} 
          text={"목표 입력하기"} 
          buttonText={"목표 저장하기"} 
          close={handlePopupClose} 
        />
      )}

      <div className={styles.titleContainer}>
        <BackButton />
        <div className={styles.title}>{isMine ? "내 버킷노트" : "길동 버킷노트"}</div>
      </div>

      <div className={styles.context}>
        {isMine ? (
          <>목표를 삭제할 수 있습니다 <br /> 버튼을 눌러서 삭제하세요!</>
        ) : (
          <>친구가 이루고자 하는 목표에요!<br />달성 여부를 맞추고 친구를 응원해 보아요!</>
        )}
      </div>

      <div className={styles.listContainer}>
        <div className={styles.listComponents}>
        <div className={styles.icon}> click<FaArrowDown />
        </div>

          <EditList text="삐약톤 참가하기" link="/detail/1" />
          <EditList text="삐약톤 참가하기" link="/detail/1" />
        </div>
      </div>

       
    </div>
  );
};

export default MyPage;
