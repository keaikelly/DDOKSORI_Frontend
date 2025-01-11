export const handleKakaoLogin = (navigate) => {
  // 카카오 SDK가 로드된 후에만 로그인 시도
  if (window.Kakao && window.Kakao.Auth) {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log('로그인 성공:', authObj);
        navigate("/main");  // navigate를 props로 전달받아 사용
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
