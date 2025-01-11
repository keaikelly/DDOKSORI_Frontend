import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './listComponent.module.css';
import { FaArrowRight } from "react-icons/fa";

const PlusListComponent = ({ text, onClick }) => {

  return (
    <div className={styles.list} onClick={onClick}>
      <img src={require('../../../assets/images/MyPage/plus.png')} alt="plus" className={styles.img} />
           
    </div>
  );
}

export default PlusListComponent;
