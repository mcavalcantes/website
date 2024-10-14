import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Markdown from "react-markdown";

import { Layout } from "../../components/layout/Layout";
import { Post } from "../../components/ui/Post";

// this is lame
import trinta from "../../content/trinta.md";

export const Blog = () => {
  let userTheme: string | null = localStorage.getItem("theme");

  if (userTheme === null) {
    userTheme = "light";
    localStorage.setItem("theme", "light");
  } else if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [theme, setTheme] = useState(userTheme);

  // this is also some lame shit

  const POSTS = [
    trinta,
  ];

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <ul>
        {POSTS.map(item =>
          <li key={uuidv4()}>
            <Post>
              <Markdown>
                {item}
              </Markdown>
            </Post>
          </li>
        )}
      </ul>
    </Layout>
  );
}
