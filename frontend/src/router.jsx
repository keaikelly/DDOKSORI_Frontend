import { createBrowserRouter } from 'react-router-dom';
import Intro from './pages/Intro/Intro.js';
import Main from './pages/Main/Main.js';
import MyPage from './pages/MyPage/MyPage/MyPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
]);

export default router;
