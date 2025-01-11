import API from '../../API/api';

export const vote = async (token, bucketListId, isPossible, setLoading, refreshVote) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/votes/${bucketListId}`;  
  try {
    // API 요청
    await API.post(endpoint, {
      bucketListId: bucketListId,
      isPossible: isPossible
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // 투표 리스트 갱신
    if (refreshVote) refreshVote();

  } catch (error) {
    console.error('API 오류: ', error);
    alert('투표에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
