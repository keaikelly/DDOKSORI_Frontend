import API from '../../API/api';

export const isMineCheck = async (token, userId, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

    const endpoint = `/api/bucketList/${userId}/is-owner`; 

  try {
    // API 요청
    const response = await API.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
      
    });

    // 성공 시 페이지 새로고침
    console.log('본인 여부:', response.data.data);
    
    return response.data.data;

  } catch (error) {
    console.error('API 오류: ', error);  // 에러 로그 출력
    alert('본인 여부 조회에 실패했습니다. 다시 시도해주세요.');  // 사용자 알림
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
