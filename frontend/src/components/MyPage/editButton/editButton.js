import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./editButton.module.css";
import { MdEdit } from "react-icons/md";

const EditButton = ({link}) => {
  const navigate = useNavigate();

  // 이전 페이지로 이동하는 함수
  const handleClick = () => {
    navigate(link); 
  };

  return (
    <div className={styles.editButton} onClick={handleClick}>
        <MdEdit /> 
    </div>
  );
};

export default EditButton;

