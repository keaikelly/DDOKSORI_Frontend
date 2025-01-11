import React from "react";
import styles from "./MyPrevious.module.css";
import BackButton from "../../../components/common/backbutton/backbutton";
import PreviousList from "../../../components/MyPage/previousList/previousList";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import NickName from "../../../components/common/button/nickname";

// Dummy data
const dummyYear = ["2024년", "2023년", "2022년", "2021년"];

const dummyText = [
  ["24토익", "24개별연구", "24대외활동"],
  ["23토익", "23개별연구", "23대외활동"],
  ["22토익", "22개별연구", "22대외활동"],
  ["21토익", "21개별연구", "21대외활동"],
];

const success = <FaRegCheckCircle color="#0022FF" />;
const failure = <FiXCircle color="#FF0000"/>;

const iconArray = [
  [success, failure, success],
  [failure, failure, success],
  [success, failure, success],
  [failure, failure, failure],
];

const MyPrevious = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <BackButton className={styles.BackButton} link={"/mypage"} />
        <div className={styles.title}>내 이전 버킷노트</div>
      </div>
      <NickName />
      <div className={styles.context}>이전의 버킷노트를 확인해보세요!</div>
      <div className={styles.listContainer}>
        <div className={styles.listComponents}>
          {dummyYear.map((year, index) => (
            <PreviousList
              key={index}
              year={year}
              array={dummyText[index]} // 항목 전달
              icon={iconArray[index]} // 각 항목에 해당하는 아이콘 전달
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPrevious;
