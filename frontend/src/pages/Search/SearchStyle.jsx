import styled, { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  height: 100vh;
  width: 80vw;
  font-family: "Pretendard-Regular";
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vh, 24px);
`;

export const Header = styled.div`
  padding-top: 2vh;
  display: flex;
  gap: clamp(12px, 2vw, 24px);
  align-items: center;
`;

export const Text = styled.div`
  padding: clamp(12px, 5.2vh, 60px) 0 0 0;
  font-size: 32px;
  font-weight: bold;
`;

export const Subheader = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  width: 80vw;
  height: clamp(32px, 4.8vh, 64px);
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vh;
  gap: clamp(4px, 2vw, 16px);
`;

export const Searchbar = styled.input`
  width: 80%;
  height: clamp(28px, 4vh, 56px);
  font-size: 12px;
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(12px, 2.4vh, 24px);
  background-color: #497e45;
  border-radius: 1.6vh;
  gap: clamp(12px, 1.6vh, 24px);
`;

export const SearchUser = styled.div`
  animation: ${({ shouldAnimate }) => (shouldAnimate ? slideDown : "none")} 0.3s
    ease-in;
  padding: clamp(12px, 1.6vh, 24px);
  background-color: white;
  border-radius: 1vh;
  box-shadow: 2px 2px 2px #00000040;
  &:hover,
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`;
export const Name = styled.div`
  font-size: 16px;
  color: black;
`;
export const Email = styled.div`
  font-size: 12px;
  color: black;
`;
