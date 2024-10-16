import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Layout } from "../../components/layout/Layout";

import { PostPreview } from "../../components/ui/PostPreview";

import {
  POSTS,
} from "../../constants/constants";

export const Blog = () => {
  let userTheme: string | null = localStorage.getItem("theme");

  if (userTheme === null) {
    userTheme = "light";
    localStorage.setItem("theme", "light");
  } else if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [theme, setTheme] = useState(userTheme);

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <h1>Blog</h1>
      <ul className="gap-4">
        {POSTS.map(item =>
          <li key={uuidv4()}>
            <PostPreview
              DATE={item.DATE}
              HREF={item.HREF}
              TITLE={item.TITLE}
              PREVIEW={item.PREVIEW}
            />
          </li>
        )}
      </ul>
    </Layout>
  );
}
