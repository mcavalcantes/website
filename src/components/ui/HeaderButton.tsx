interface HeaderButtonProps {
  href: string;
  title: string;
}

export const HeaderButton = ({ href, title }: HeaderButtonProps) => (
  <a href={href} className="px-2 py-1 rounded hover:bg-light-hover dark:hover:bg-dark-hover transition ease-out">
    {title}
  </a>
);
