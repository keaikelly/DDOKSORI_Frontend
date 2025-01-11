import React from "react";
import * as S from "./ErrorStyle";
import { BiSolidErrorAlt } from "react-icons/bi";

export default function Error({ text }) {
  return (
    <S.Wrapper>
      <BiSolidErrorAlt size={"20vh"} style={{ color: "#497E45" }} />
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
