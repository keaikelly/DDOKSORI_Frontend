import API from '../../API/api';

export const getName = async (token, setLoading) => {
  if (setLoading) setLoading(true);
  const endpoint = `/api/user/nickname/get`;  // bucketListId를 URL에 포함시킴

  try {
    const response = await API.patch(endpoint, {}, {  // 빈 본문을 보내는 경우
      headers: { 
        Authorization: `Bearer ${token}`,
        'Accept': '*/*',  // Accept 헤더는 *.*
        'Content-Type': 'application/json',  // Content-Type은 JSON으로 설정
      },
    });

    return response.data; 
  } catch (error) {
    console.error('API 오류: ', error);
  } finally {
    if (setLoading) setLoading(false);
  }
};

