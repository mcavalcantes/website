import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Layout } from "../../components/layout/Layout";

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
      <p>blog</p>
    </Layout>
  );
}
