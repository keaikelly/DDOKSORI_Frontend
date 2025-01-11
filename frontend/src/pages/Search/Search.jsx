import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import * as S from "./SearchStyle";
import { users } from "./data";
import BackButton from "../../components/common/backbutton/backbutton";
import Error from "../../components/Error/Error";

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
        <S.Subheader>친구의 목표를 보고 댓글을 남겨보세요.</S.Subheader>
        <S.SearchContainer>
          <IoSearch style={{ color: "black" }} />
          <S.Searchbar placeholder="이메일/닉네임 입력" />
        </S.SearchContainer>
        {load ? (
          users.length > 0 ? (
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
          ) : (
            <Error text="해당 아이디 유저가 존재하지 않습니다." />
          )
        ) : (
          <Error text="이메일 또는 닉네임을 입력하시오" />
        )}
      </S.Container>
    </S.Wrapper>
  );
}
