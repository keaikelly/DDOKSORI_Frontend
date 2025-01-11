import React from "react";
import styles from "./previousList.module.css";

const PreviousList = ({ year, array, icon }) => {
  return (
    <div className={styles.list}>
      <div className={styles.year}>{year}</div>
      <div className={styles.text}>
      <div className={styles.array}>
        {array.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemtem}>{item}</div>
            <div className={styles.icon}>{icon[index]}</div>
            {/* 각 항목에 아이콘 매핑 */}
          </div>
        ))}
        
      </div>
      </div>
    </div>
  );
};

export default PreviousList;
