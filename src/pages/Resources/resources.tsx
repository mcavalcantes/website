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
      <ul className="gap-2">
        {RESOURCES.map(item =>
          <li key={uuidv4()}>
            <a
              href={item.HREF}
              target="_blank"
              className="text-sky-800 dark:text-sky-600 hover:underline"
            >
              {item.TITLE}
            </a>
          </li>
        )}
      </ul>
    </Layout>
  );
}
