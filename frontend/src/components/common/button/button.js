import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './button.module.css';
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, link }) => {
  const navigate = useNavigate();

  // 링크를 클릭할 때, 해당 경로로 이동하는 함수
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <div className={styles.text}>
        {text}
      </div>
      <div className={styles.arrow}>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Button;
