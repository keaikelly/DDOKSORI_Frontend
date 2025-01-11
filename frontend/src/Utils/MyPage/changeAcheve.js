import API from '../../API/api';

export const changeAcheve = async (token, isAchived, bucketListId, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/bucketList/${bucketListId}/achieve`;
  try {
    // API 요청
    await API.post(endpoint, {
        isAchived: isAchived, // goalText에 text 값 전달
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // 헤더 설정 시 Content-Type은 대소문자 구분을 유의
      },
    });

    // 성공 시 페이지 새로고침
    window.location.reload();

  } catch (error) {
    console.error('API 오류: ', error); // 에러 로그 출력
    alert('버킷리스트 생성에 실패했습니다. 다시 시도해주세요.'); // 사용자 알림
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
