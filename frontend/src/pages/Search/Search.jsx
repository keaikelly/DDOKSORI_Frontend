import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCaretBackCircle, IoSearch } from "react-icons/io5";
import * as S from "./SearchStyle";
import { users } from "./data";
import BackButton from "../../components/common/backbutton/backbutton";

export default function Search() {
  const nav = useNavigate();
  const [load, setLoad] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    const timer = setTimeout(() => setShouldAnimate(false), 1000); // 애니메이션 지속 시간 (0.5초)과 동일
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <BackButton />
          <S.Text>친구 버킷노트</S.Text>
        </S.Header>
        <S.Subheader>친구의 목표를 보고 댓글을 남겨보세요</S.Subheader>
        <S.SearchContainer>
          <IoSearch style={{ color: "black" }} />
          <S.Searchbar placeholder="아이디 입력" />
        </S.SearchContainer>
        {load ? (
          <S.List>
            {users.map((user, index) => (
              <S.SearchUser
                key={user.id}
                shouldAnimate={shouldAnimate}
                onClick={() => nav("/mypage")}
              >
                <S.Name>{user.name}</S.Name>
                <S.Email>{user.email}</S.Email>
              </S.SearchUser>
            ))}
          </S.List>
        ) : null}
      </S.Container>
    </S.Wrapper>
  );
}
