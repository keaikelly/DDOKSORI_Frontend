import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './button.module.css';
import { FaArrowRight } from "react-icons/fa";

const Button = ({ text, link, onClick, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      if (link) {
        navigate(link);
      }
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <div 
      className={`${styles.button} ${disabled ? styles.disabled : ''}`} 
      onClick={handleClick}
    >
      <div className={styles.text}>
        {text}
      </div>
      <div className={styles.arrow}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Button;
