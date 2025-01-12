import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import * as S from "./SearchStyle";
import BackButton from "../../components/common/backbutton/backbutton";
import Error from "../../components/Error/Error";
import { searchId } from "../../Utils/User/searchId";

export default function Search() {
  const nav = useNavigate();
  const [load, setLoad] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [result, setResult] = useState("SUCCESS");

  useEffect(() => {
    const loadUsers = async () => {
      if (!keyword.trim()) {
        setUsers([]); // 검색어가 없으면 사용자 목록 초기화
        setLoad(false); // 로딩 상태 초기화
        return;
      }
      setLoading(true);
      try {
        const data = await searchId(token, keyword, loading);
        setUsers(data.data);
        setResult(data.result);
        setLoad(true);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [keyword]);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(false), 50); // 애니메이션 지속 시간 (0.5초)과 동일
    return () => clearTimeout(timer);
  }, [shouldAnimate]);

  useEffect(() => {
    setShouldAnimate(true); // 새로운 검색어 입력 시 애니메이션 실행
  }, [keyword]);

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
          <S.Searchbar
            placeholder="이메일/닉네임 입력"
            onChange={handleSearch}
            value={keyword}
          />
        </S.SearchContainer>
        {load ? (
          result === "SUCCESS" ? (
            <S.List>
              {users.map((user) => (
                <S.SearchUser
                  key={user.id}
                  shouldAnimate={shouldAnimate}
                  onClick={() => nav(`/mypage/${user.id}`)}
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
          <Error text="이메일 또는 닉네임을 입력하시오 " />
        )}
      </S.Container>
    </S.Wrapper>
  );
}
