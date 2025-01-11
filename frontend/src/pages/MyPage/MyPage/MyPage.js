import React, { useState } from "react";
import styles from "./MyPage.module.css";
import SmallButton from "../../../components/common/smallButton/smallButton";
import ListComponent from "../../../components/MyPage/listComponent/listComponent";
import PlusListComponent from "../../../components/MyPage/listComponent/plusListComponent.js";
import BackButton from "../../../components/common/backbutton/backbutton.js";
import InputPopup from "../../../components/common/InputPopup/InputPopup.js";
import { IoMdShare } from "react-icons/io";
import EditButton from "../../../components/MyPage/editButton/editButton.js";
import { handleKakaoShare } from '../../../Utils/Intro/kakaoLogin/KakaoShare';


const SharePopup = ({ close }) => {
  return (
    <div className={styles.background} onClick={close}>
      <div className={styles.sharePopup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          공유 링크가 복사되었습니다!
        </div>
        <button className={styles.closeButton} onClick={close}>
          닫기
        </button>
      </div>
    </div>
  );
};

const MyPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMine, setIsMine] = useState(true);
  const [sharePopup, setSharePopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true); // 팝업 열기
  };

  const handlePopupClose = () => {
    setShowPopup(false); // 팝업 닫기
  };

  const sharePopupOpen = () => {
    setSharePopup(true); // 공유 팝업 열기
  };

  const sharePopupClose = () => {
    setSharePopup(false); // 공유 팝업 닫기
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
          <EditButton link="/editlist" />
          </div>
          {isMine && <PlusListComponent onClick={handlePopupOpen} />}
          <ListComponent text="삐약톤 참가하기" link="/detail/1" />
          <ListComponent text="테스트2" link="/detail/1" />
        </div>
        <SmallButton text={"이전 노트 보기"} link={"/myprevious"} />
      </div>
    </div>
  );
};

export default MyPage;
