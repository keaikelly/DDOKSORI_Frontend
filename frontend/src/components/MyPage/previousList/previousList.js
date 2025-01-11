import React from "react";
import styles from "./previousList.module.css";

const PreviousList = ({ year, array, icon }) => {
  return (
    <div className={styles.list}>
      <div className={styles.year}>{year}</div>
      <ul className={styles.array}>
        {array.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
            <span className={styles.icon}>{icon[index]}</span>{" "}
            {/* 각 항목에 아이콘 매핑 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousList;
