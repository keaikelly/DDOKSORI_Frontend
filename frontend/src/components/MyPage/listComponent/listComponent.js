import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './listComponent.module.css';
import { FaArrowRight } from "react-icons/fa";

const ListComponent = ({ text, onClick }) => {

  return (
    <div className={styles.list} onClick={onClick}>
      <div className={styles.text}>
        {text}
      </div>
      <img src={require('../../../assets/images/MyPage/go.png')} alt="go" className={styles.img} />
    </div>
  );
}

export default ListComponent;
