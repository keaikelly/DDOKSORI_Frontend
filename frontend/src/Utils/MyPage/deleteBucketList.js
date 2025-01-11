import API from '../../API/api';

export const deleteBucketList = async (token, id, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/bucketList/${id}`;
  try {
    // API 요청 (DELETE는 데이터가 필요 없으므로 params를 제외하고 요청)
    await API.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // 헤더 설정 시 Content-Type은 대소문자 구분을 유의
      },
    });

    // 성공 시 페이지 새로고침
    window.location.reload();

  } catch (error) {
    console.error('API 오류: ', error); // 에러 로그 출력
    alert('버킷리스트 삭제에 실패했습니다. 다시 시도해주세요.'); // 사용자 알림
  } finally {
    if (setLoading) setLoading(false); // 로딩 상태 해제
  }
};
