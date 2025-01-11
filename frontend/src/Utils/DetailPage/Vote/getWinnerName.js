import API from '../../API/api';

export const vote = async (token, bucketListId, isPossible, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/votes/names`;  
  try {
    // API 요청
    await API.get(endpoint, {
      bucketListId: bucketListId,
      isPossible: isPossible
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('API 오류: ', error);
    alert('정답자 조회에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
