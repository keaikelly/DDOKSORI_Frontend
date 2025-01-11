import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import styles from "./InputPopup.module.css";
import Button from "../button/button";

const InputPopup = ({ title, text, buttonText, onClick, close }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // 입력 값을 상태로 관리
  };

  const handleButtonClick = () => {
    if (onClick) {
      onClick(inputValue); // 입력 값을 처리하는 함수 호출
    }
    if (close) {
      close(); // 팝업 닫기 함수 호출
    }
  };
  
  

  return (
    <div className={styles.background} onClick={close}>
      <div className={styles.InputPopup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <FaRegTimesCircle className={styles.closeButton} onClick={close} />
        </div>
        <input
          type="text"
          placeholder={text}
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button text={buttonText} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default InputPopup;
