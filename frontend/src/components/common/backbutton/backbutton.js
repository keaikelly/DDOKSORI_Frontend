import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backbutton.module.css";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();

  // 이전 페이지로 이동하는 함수
  const handleClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className={styles.backbutton} onClick={handleClick}>
      <IoArrowBack size={"clamp(24px,8vw, 50px)"} />
    </div>
  );
};

export default BackButton;
