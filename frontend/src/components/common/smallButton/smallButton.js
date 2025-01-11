import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './smallButton.module.css';


const SmallButton = ({ text, onClick }) => {

  return (
    <div>
    <div className={styles.SmallButton} onClick={onClick}>
      <div className={styles.text}>
        {text}
      </div>
    </div>
    </div>
  );
}

export default SmallButton;
