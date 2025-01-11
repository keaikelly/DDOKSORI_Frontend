import API from '../../API/api';

export const editBucketList = async (token, id, text, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/bucketList/edit`;
  try {
    // API 요청 (PATCH 요청으로 수정 데이터 전송)
    await API.patch(endpoint, {
      bucketListId: id,  // 수정할 버킷리스트 ID
      goalText: text,    // 수정할 텍스트
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
    });

    // 성공 시 페이지 새로고침
    window.location.reload();

  } catch (error) {
    console.error('API 오류: ', error);  // 에러 로그 출력
    alert('버킷리스트 수정에 실패했습니다. 다시 시도해주세요.');  // 사용자 알림
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
