import API from '../../API/api';

export const handleKakaoLogin = (navigate) => {
  // 카카오 SDK가 로드된 후에만 로그인 시도
  if (window.Kakao && window.Kakao.Auth) {
    window.Kakao.Auth.login({
      success: async function (authObj) {
        console.log('로그인 성공:', authObj.access_token);
        console.log(JSON.stringify({
          token: authObj.access_token,
        }));

        try {
          // 템플릿 리터럴을 사용하여 URL에 access_token을 넣기
          const response = await API.post(
            `/api/kakao/token/login?token=${authObj.access_token}`,
            { /* 요청 바디가 비어있는 경우, 추가적으로 필요한 데이터를 여기에 전달 */ },
            {
              headers: {
                'Content-Type': 'application/json', // 일반적으로 JSON을 보내는 경우 이 값을 사용
              },
            }
          );
          

          // 서버 응답에서 token과 userId를 추출
          const { token, userId } = response.data;

          // localStorage에 저장
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);

          // 로그인 성공 후 페이지 이동
          navigate("/main");  // navigate를 props로 전달받아 사용

        } catch (error) {
          console.error('API 오류:', error);
          alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }

        // 로그인 후 사용자 정보 요청
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log('사용자 정보:', response);
          },
          fail: function (error) {
            console.error('사용자 정보 요청 실패:', error);
          },
        });
      },
      fail: function (error) {
        console.error('로그인 실패:', error);
      },
    });
  } else {
    console.error('카카오 SDK가 로드되지 않았습니다.');
  }
};
