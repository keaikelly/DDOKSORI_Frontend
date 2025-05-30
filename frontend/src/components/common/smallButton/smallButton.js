import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./smallButton.module.css";

const SmallButton = ({ text, link }) => {
  const navigate = useNavigate();

  // 링크를 클릭할 때, 해당 경로로 이동하는 함수
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div>
      <div className={styles.SmallButton} onClick={handleClick}>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default SmallButton;
