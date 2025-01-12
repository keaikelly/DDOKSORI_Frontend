import API from '../../API/api';

export const editName = async (token, name, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/user/nickname/edit`;
  try {
    // API 요청 (PATCH 요청으로 수정 데이터 전송)
    await API.patch(endpoint, {
      nickname: name,  
    }, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Accept': '*/*',  // Accept 헤더는 *.*
        'Content-Type': 'application/json',  // Content-Type은 JSON으로 설정
      },
    });

    // 성공 시 페이지 새로고침
    window.location.reload();

  } catch (error) {
    console.error('API 오류: ', error);  // 에러 로그 출력
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
