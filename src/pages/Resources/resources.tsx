import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Layout } from "../../components/layout/Layout";

import {
  RESOURCES,
} from "../../constants/constants";

export const Resources = () => {
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
      <h1>Recursos</h1>
      <p>Uma coletânea de conteúdos interessantes que vejo por aí.</p>
      <ul className="gap-4">
        {RESOURCES.map(item =>
          <li key={uuidv4()}>
            <a
              href={item.HREF}
              target="_blank"
              className="px-0.5 underline decoration-dotted underline-offset-2 bg-light-hover dark:bg-dark-hover"
            >
              {item.TITLE}
            </a>
          </li>
        )}
      </ul>
    </Layout>
  );
}
