import React, { useState, useEffect } from 'react'; 
import { useParams, useLocation } from 'react-router-dom';
import styles from './DetailPage.module.css';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegTimesCircle, FaArrowCircleUp } from "react-icons/fa";
import BackButton from '../../../components/common/backbutton/backbutton';
import { PiCrownSimpleFill } from "react-icons/pi";
import NickName from '../../../components/common/button/nickname';
import { getComment } from '../../../Utils/DetailPage/Comment/getComment';
import { createComment } from '../../../Utils/DetailPage/Comment/createComment';
import { isMineCheck } from '../../../Utils/MyPage/isMine';
import { isAchieved } from '../../../Utils/MyPage/isAchieved';
import { getWinnerName } from '../../../Utils/DetailPage/Vote/getWinnerName';
import { changeAcheve } from '../../../Utils/MyPage/changeAcheve';
import { vote } from '../../../Utils/DetailPage/Vote/vote';
const DetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const goalText = queryParams.get('text') || "";

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isMine, setIsMine] = useState(false);
  const [isResult, setIsResult] = useState(true);
  const [isAchieve, setIsAchieve] = useState(true);
  const [names, setNames] = useState([]);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) return;

    try {
      setLoading(true);

      await createComment(token, id, comment);
      const data = await getComment(token, id);
      setComments(data);
      setComment(""); // Reset the comment input
    } catch (error) {
      alert("댓글 작성 중 오류 발생");
      console.error("댓글 작성 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  const clickButton = async ({boolclick}) => {
    await changeAcheve(token, boolclick, id)
  };
  useEffect(() => {
    const fetchData = async () => {
      if (token && id && userId) {
        try {
          const data = await getComment(token, id);
          setComments(data);
          const result = await isMineCheck(token, id);
          setIsMine(result);
          const achieved = await isAchieved(token, id);
          if(achieved===null){{
            setIsResult(false);
          }}else{
            setIsResult(true);
            setIsAchieve(achieved);
            const namelist = await getWinnerName(token, id, isAchieve);
            console.log(getWinnerName(token, id, isAchieve));
            setNames(namelist);
          }
        } catch (error) {
          
        }
      }
    };

    fetchData();
  }, [token, id, userId]);



  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <BackButton />
        <div className={styles.title}>
          {isMine ? "내 버킷노트" : "길동 버킷노트"}
        </div>
      </div>
      {isMine && <NickName />}
      <div className={styles.context}>
        선택한 목표의 세부사항을 확인해 보세요!
      </div>
      <div className={styles.goal}>
        <PiCrownSimpleFill color="#FFDD00" style={{ margin: "auto 0" }} />
        <div>{goalText}</div>
      </div>
      {isResult ? (
        <div className={styles.voteContainer}>
          <div>
            {isAchieve ? "해당 목표를 성공했어요!" : "해당 목표를 실패했어요ㅠ"}
            <br />
            정답을 맞춘 사람들을 소개합니다.
          </div>
          <hr />
          <div className={styles.winnerContainer}>
            {names.length > 0 ? (
              names.map((name, index) => (
                <div key={index}>{name}</div>
              ))
            ) : (
              <div>참여자가 없습니다.</div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.voteContainer}>
          <div>
            {isMine ? "이 목표를 달성했는지 체크하세요!" : "이 아이가 목표를 달성할 수 있을까요?"}
          </div>
          {isMine?          <div className={styles.voteButtonContainer}>
            <div className={styles.voteButton} onClick={() => changeAcheve(token, "true", id)}>
              <FaRegCircleCheck size={"clamp(60px, 10vw, 76px)"} color='#0022FF' />
            </div>
            <div className={styles.voteButton} onClick={() => changeAcheve(token, "false", id)}>
              <FaRegTimesCircle size={"clamp(60px, 10vw, 76px)"} color='#FF0000' />
            </div>
          </div>:          <div className={styles.voteButtonContainer}>
            <div className={styles.voteButton} onClick={() => vote(token,  id, "true")}>
              <FaRegCircleCheck size={"clamp(60px, 10vw, 76px)"} color='#0022FF' />
            </div>
            <div className={styles.voteButton} onClick={() => vote(token, id, "false")}>
              <FaRegTimesCircle size={"clamp(60px, 10vw, 76px)"} color='#FF0000' />
            </div>
          </div>}
        </div>
      )}
      <div className={styles.commentsContainer}> 
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="응원 댓글 남기기"
            className={styles.input}
            value={comment}
            onChange={handleCommentChange}
          />
          <div className={styles.sendbtn}>
            <FaArrowCircleUp
              className={styles.icon}
              color='black'
              onClick={handleCommentSubmit}
              disabled={loading}
            />
          </div>
        </div>
        <hr style={{ borderColor: "#B7B7B7", borderWidth: "1px", borderStyle: "solid" }} />
        <div className={styles.commentsListContainer}>
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div key={index} className={styles.commentsList}>
                <div style={{ textAlign: "right" }}>{item.userName}</div>
                <div style={{ textAlign: "center" }}>|</div>
                <div style={{ textAlign: "left" }}>{item.content}</div>
              </div>
            ))
          ) : (
            <div style={{ margin: "20% 0" }}>댓글을 등록해 주세요!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
