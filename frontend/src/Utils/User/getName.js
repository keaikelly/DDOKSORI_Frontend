import API from '../../API/api';

// 데이터를 가져오는 함수
export const getName = async (token, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);
  const endpoint = `/api/user/nickname/get`;  // bucketListId를 URL에 포함시킴

  try {
    // API 요청
    const response = await API.patch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'accept: */*',  // 헤더 설정
      },
    });

    // 성공적으로 데이터를 받으면 처리할 로직
    console.log('데이터:', response.data);
    return response.data;  // 필요한 데이터 반환
  } catch (error) {
    console.error('API 오류: ', error);
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
