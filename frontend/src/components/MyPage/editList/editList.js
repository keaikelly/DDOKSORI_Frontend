import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './editList.module.css';
import { IoTrashBin } from "react-icons/io5";
import { deleteBucketList } from '../../../Utils/MyPage/deleteBucketList';
const ListComponent = ({ text, link }) => {
  const navigate = useNavigate();


  // TrashBin 아이콘 클릭 시 경고창 표시
  const handleTrashClick = (event) => {
    event.stopPropagation(); // 부모 클릭 이벤트 방지
    window.alert(`${text}을(를) 삭제하시겠습니까?`);
    navigate(-1)
  };
 
  return (
    <div className={styles.list} >
      <div className={styles.text}>
        {text}
      </div>
      <IoTrashBin onClick={handleTrashClick} />
    </div>
  );
}

export default ListComponent;
