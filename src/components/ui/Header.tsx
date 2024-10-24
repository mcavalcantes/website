import { HeaderButton } from "./HeaderButton";

import sunIcon from "../../assets/icons/stratis-ui-sun-white.svg";
import moonIcon from "../../assets/icons/stratis-ui-moon-black.svg";

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Header = ({ theme, setTheme }: HeaderProps) => {
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  return (
    <header className="h-20 flex items-center justify-between">
      <span className="flex items-center gap-2">
        <HeaderButton href="/" title="Home" />
        <HeaderButton href="/blog" title="Blog" />
      </span>
      <span className="flex items-center gap-2">
        <button id="theme-changer" onClick={toggleTheme} className="p-1 rounded hover:bg-light-hover dark:hover:bg-dark-hover transition ease-out">
          <img src={theme === "light" ? moonIcon : sunIcon} alt="ícone do tema"/>
        </button>
      </span>
    </header>
  );
}
