import { createBrowserRouter } from 'react-router-dom';
import Intro from './pages/Intro/Intro.js';
import Main from './pages/Main/Main.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/main',
    element: <Main />,
  },
]);

export default router;
