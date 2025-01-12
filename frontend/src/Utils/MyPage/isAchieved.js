import API from '../../API/api';

// 데이터를 가져오는 함수
export const isAchieved = async (token, bucketListId, setLoading) => {
  // 이미 로딩 중인 경우 함수 실행을 중지
  if (setLoading) setLoading(true);

  const endpoint = `/api/bucketList/${bucketListId}/is-achieved`;  // bucketListId를 URL에 포함시킴

  try {
    // API 요청
    const response = await API.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',  // 헤더 설정
      },
    });
    console.log('데이터:', response.data.data);
  
    // response.data.data가 존재하는 경우 (true, false 포함)
    if (response.data.hasOwnProperty('data')) {
      return response.data.data;  // 필요한 데이터 반환
    } else {
      return null;  // 데이터가 없을 경우 null 반환
    }
  } catch (error) {
    console.error('API 오류: ', error);  // 에러 로그 출력
    alert('데이터를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.');  // 사용자 알림
  }
  
};
