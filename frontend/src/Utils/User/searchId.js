import API from '../../API/api';

// 데이터를 가져오는 함수
export const searchId = async (token,text, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/user/api/user/search`;  // bucketListId를 URL에 포함시킴

  try {
    // API 요청
    const response = await API.get(endpoint, {
      keyword: text,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
    });

    // 성공적으로 데이터를 받으면 처리할 로직
    console.log('데이터:', response.data);
    return response.data;  // 필요한 데이터 반환

  } catch (error) {
    console.error('API 오류: ', error);
    alert('검색에 실패했습니다. 다시 시도해주세요.');
  } finally {
    if (setLoading) setLoading(false);  // 로딩 상태 해제
  }
};
