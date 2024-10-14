interface PillProps {
  title: string;
}

export const Pill = ({ title }: PillProps) => (
  <div className={
    "cursor-default select-none w-fit h-6 px-2 flex items-center justify-center rounded-xl border " +
    "border-light-border hover:bg-dark-background hover:text-dark-text " +
    "dark:border-dark-border dark:hover:bg-light-background dark:hover:text-light-text " +
    "transition ease-out"
  }>
    <p>{title}</p>
  </div>
);
