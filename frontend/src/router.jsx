import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro/Intro.js";
import Main from "./pages/Main/Main.js";
import MyPage from "./pages/MyPage/MyPage/MyPage.js";
import DetailPage from "./pages/MyPage/DetailPage/detailPage.js";
import MyPrevious from "./pages/MyPage/MyPrevious/MyPrevious.js";
import Search from "./pages/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  {
    path: "/myprevious",
    element: <MyPrevious />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
