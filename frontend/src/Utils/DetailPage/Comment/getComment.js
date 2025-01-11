import API from '../../API/api';

// 데이터를 가져오는 함수
export const getComment = async (token, userId, bucketListId, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/comment/${bucketListId}`;  // bucketListId를 URL에 포함시킴

  try {
    // API 요청
    const response = await API.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
      params: {
        userId: userId,  // 쿼리 파라미터로 userId 추가
      }
    });

    // 성공적으로 데이터를 받으면 처리할 로직
    console.log('댓글 데이터:', response.data);
    return response.data;  // 필요한 데이터 반환

  } catch (error) {
    console.error('API 오류: ', error);
    alert('댓글 불러들이기에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
