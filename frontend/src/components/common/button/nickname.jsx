import React, { useEffect, useState } from "react";
import * as S from "./nicknameStyle";
import InputPopup from "../InputPopup/InputPopup";
import { getName } from "../../../Utils/User/getName";
import { editName } from "../../../Utils/User/editName";

export default function NickName() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true); // 팝업 열기
  };

  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getNickname = async () => {
      setLoading(true);
      try {
        const data = await getName(token, loading);
        setNickname(data.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getNickname();
  }, [token, showPopup]);

  const setNewNick = async (newNick) => {
    setLoading(true);
    try {
      await editName(token, newNick, loading);
      setNickname(newNick);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Wrapper>
      {showPopup && (
        <InputPopup
          title={"닉네임 설정하기"}
          text={nickname}
          buttonText={"닉네임 저장"}
          onClick={setNewNick} // 수정된 닉네임 전달
          close={() => setShowPopup(false)} // 팝업 닫기
        />
      )}
      <S.Text onClick={handlePopupOpen}>닉네임 설정하기</S.Text>
    </S.Wrapper>
  );
}
