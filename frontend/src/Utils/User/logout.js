import API from '../../API/api';

// 데이터를 가져오는 함수
export const logout = async (token, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/user/logout`;  // bucketListId를 URL에 포함시킴

  try {
    // API 요청
    await API.post(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
    });

  } catch (error) {
    console.error('API 오류: ', error);
    alert('로그아웃웃에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
