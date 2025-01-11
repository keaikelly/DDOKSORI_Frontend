import React, { useState } from "react";
import * as S from "./nicknameStyle";
import InputPopup from "../InputPopup/InputPopup";

export default function NickName() {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupOpen = () => {
    setShowPopup(true); // 팝업 열기
  };

  const handlePopupClose = () => {
    setShowPopup(false); // 팝업 닫기
  };

  return (
    <S.Wrapper>
      {showPopup && (
        <InputPopup
          title={"닉네임 설정하기"}
          text={"닉네임 입력"}
          buttonText={"닉네임 저장"}
          close={handlePopupClose}
        />
      )}
      <S.Text onClick={handlePopupOpen}>닉네임 설정하기</S.Text>
    </S.Wrapper>
  );
}
