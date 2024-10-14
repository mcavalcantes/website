import { Social } from "../../types/types";

export const SocialCard = ({ ICON, HREF, TITLE }: Social) => (
  <a
    href={HREF}
    target="_blank"
    className={
      "w-full h-16 md:h-32 flex flex-col items-center justify-center rounded border " +
      "border-light-border hover:bg-light-hover " +
      "dark:border-dark-border dark:hover:bg-dark-hover " +
      "transition ease-out"
    }
  >
    <img src={localStorage.getItem("theme") === "light" ? ICON.BLACK : ICON.WHITE} />
    <p>{TITLE}</p>
  </a>
);
