import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './DetailPage.module.css';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegTimesCircle, FaArrowCircleUp } from "react-icons/fa";
import BackButton from '../../../components/common/backbutton/backbutton';
import { PiCrownSimpleFill } from "react-icons/pi";
import NickName from '../../../components/common/button/nickname';
import { getComment } from '../../../Utils/DetailPage/Comment/getComment';
import { createComment } from '../../../Utils/DetailPage/Comment/createComment';

const DetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(""); // 댓글 상태
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [isMine, setIsMine] = useState(false);
  const [isResult, setIsResult] = useState(true);
  const [isAchieve, setIsAchieve] = useState(true);
  const [names, setNames] = useState([]); // names state to store fetched names
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false); // Loading state

  // 댓글 입력 시 상태 업데이트
  const handleCommentChange = (e) => {
    setComment(e.target.value); // 입력 값 변경 처리
  };

  // 댓글 제출 시 댓글 목록에 추가
  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      return; // 입력값이 없으면 제출하지 않음
    }

    try {
      setLoading(true);
      // 댓글 생성 API 호출
      await createComment(token, id, comment);
      
      // 댓글 리스트 새로 고침
      const data = await getComment(token, id);
      setComments(data); // 받아온 데이터를 상태에 저장

      setComment(""); // 댓글 입력창 초기화
    } catch (error) {
      console.error("댓글 작성 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      if (token && id && userId) {
        try {
          const data = await getComment(token, id);
          setComments(data); // 받아온 데이터를 댓글 목록에 저장
        } catch (error) {
          console.error("댓글 데이터를 가져오는 중 오류 발생:", error);
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
      {isMine ? <NickName /> : null}
      <div className={styles.context}>
        선택한 목표의 세부사항을 확인해 보세요!
      </div>
      <div className={styles.goal}>
        <PiCrownSimpleFill color="#FFDD00" style={{ margin: "auto 0" }} />
        <div>삐약톤 수상하기</div>
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
          <div className={styles.voteButtonContainer}>
            <div className={styles.voteButton}>
              <FaRegCircleCheck size={"clamp(60px, 10vw, 76px)"} color='#0022FF' />
            </div>
            <div className={styles.voteButton}>
              <FaRegTimesCircle size={"clamp(60px, 10vw, 76px)"} color='#FF0000' />
            </div>
          </div>
        </div>
      )}
      <div className={styles.commentsContainer}>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="응원 댓글 남기기"
            className={styles.input}
            value={comment}
            onChange={handleCommentChange} // 입력 값 변경 처리
          />
          <div className={styles.sendbtn}>
            <FaArrowCircleUp
              className={styles.icon}
              color='black'
              onClick={handleCommentSubmit} // 댓글 제출 처리
              disabled={loading} // 로딩 중에는 버튼 비활성화
            />
          </div>
        </div>
        <hr style={{ borderColor: "#B7B7B7", borderWidth: "1px", borderStyle: "solid" }} />
        <div className={styles.commentsListContainer}>
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <div key={index} className={styles.commentsList}>
                <div style={{ textAlign: "right" }}>
                  {item.userName}
                </div>
                <div style={{ textAlign: "center" }}>
                  |
                </div>
                <div style={{ textAlign: "left" }}>
                  {item.content}
                </div>
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
