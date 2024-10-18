import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home/home";
import { Blog } from "../pages/Blog/blog";
import { Post } from "../pages/Post/post";

import { POSTS } from "../constants/constants";

const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
];

const BLOG_ROUTES = POSTS.map(item => {
  return ({
    path: `blog/${item.HREF}`,
    element: <Post
      DATE={item.DATE}
      TITLE={item.TITLE}
      CONTENT={item.CONTENT}
    />,
  });
});

export const router = createBrowserRouter(ROUTES.concat(BLOG_ROUTES));
