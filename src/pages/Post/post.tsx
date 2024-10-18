import { useState } from "react";

import { Layout } from "../../components/layout/Layout";

import Markdown from "react-markdown";

interface PostProps {
  DATE: string;
  TITLE: string;
  CONTENT: string;
}

export const Post = ({ DATE, TITLE, CONTENT }: PostProps) => {
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
      <article className="text-lg flex flex-col gap-4">
        <h1>{TITLE}</h1>
        <span className="text-sm italic">{DATE}</span>
        <Markdown>{CONTENT}</Markdown>
      </article>
    </Layout>
  );
}
