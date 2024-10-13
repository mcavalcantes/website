import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home/home";
import { Blog } from "../pages/Blog/blog";

const ROUTES = {
  Home: "/",
  Blog: "/blog",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.Home,
    element: <Home />,
  },
  {
    path: ROUTES.Blog,
    element: <Blog />,
  },
]);
