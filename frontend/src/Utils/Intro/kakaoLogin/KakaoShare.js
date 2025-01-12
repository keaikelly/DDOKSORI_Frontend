export const handleKakaoShare = (navigate) => {
  // 현재 페이지의 URL을 가져옵니다.
  const currentUrl = window.location.href;

  // 카카오 SDK가 로드되었는지 확인
  if (window.Kakao && window.Kakao.isInitialized()) {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '친구가 버킷 노트를 공유했습니다.',
        description: '친구의 버킷 노트를 구경해보세요!',
        imageUrl: require('../../../assets/images/Intro/fourLeafClover.png'), // 이미지를 로드하는 방식 수정
        link: {
          mobileWebUrl: currentUrl, // 현재 페이지 URL을 공유
          webUrl: currentUrl,       // 웹 URL에도 현재 페이지 URL을 공유
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: currentUrl, // 현재 페이지 URL을 버튼 링크로 설정
            webUrl: currentUrl,       // 웹 URL에도 동일한 링크 설정
          },
        },
      ],
    });
  } else {
    console.error('카카오 SDK가 로드되지 않았습니다.');
  }
};