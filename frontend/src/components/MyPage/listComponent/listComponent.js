import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './listComponent.module.css';

const ListComponent = ({ text, link }) => {
  const navigate = useNavigate();
  // 링크를 클릭할 때, 해당 경로로 이동하는 함수
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div className={styles.list} onClick={handleClick}>
      <div className={styles.text}>
        {text}
      </div>
      <img src={require('../../../assets/images/MyPage/go.png')} alt="go" className={styles.img} />
    </div>
  );
}

export default ListComponent;
