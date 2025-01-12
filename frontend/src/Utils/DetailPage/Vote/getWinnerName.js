import API from '../../../API/api';

export const getWinnerName = async (token, bucketListId, isPossible, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/votes/names`;  
  try {
    // API 요청
    const response = await API.get(endpoint, {
      params: {
        bucketListId: bucketListId,
        isPossible: isPossible,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    // 응답 데이터 반환 (JSON 형식으로 자동 파싱됨)
    console.log("response.data");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('API 오류: ', error);
    alert('정답자 조회에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
