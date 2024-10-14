import React from "react";
import { useState } from "react";

import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  let userTheme: string | null = localStorage.getItem("theme");

  if (userTheme === null) {
    userTheme = "light";
    localStorage.setItem("theme", "light");
  } else if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [theme, setTheme] = useState(userTheme);

  return (
    <div className="min-h-screen w-full flex flex-col px-8 md:px-32 xl:px-96 bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <Header theme={theme} setTheme={setTheme} />
      <div className="w-full flex flex-col gap-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}
