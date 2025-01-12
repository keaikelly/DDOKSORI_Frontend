import API from '../../API/api';

export const getBucketList = async (token, userId, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/bucketList/public-bucketlists`;  // 공용 버킷리스트 조회 엔드포인트

  try {
    // API 요청
    const response = await API.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
      params: {
        userId: userId,  // 쿼리 파라미터로 userId 추가
      },
    });

    // 성공 시 페이지 새로고침

    
    return response.data.data;

  } catch (error) {
    console.error('API 오류: ', error);  // 에러 로그 출력
    alert('버킷리스트 조회에 실패했습니다. 다시 시도해주세요.');  // 사용자 알림
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
