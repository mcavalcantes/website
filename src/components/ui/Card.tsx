import { v4 as uuidv4 } from "uuid";

interface CardProps {
  START_DATE: string | null;
  END_DATE: string | null;
  DATE: string | null;
  HREF: string | null;
  TITLE: string;
  SUBTITLE: string | null;
  DESCRIPTION: string | null;
  BULLETS: [string, string, string] | null;
}

export const Card = ({
  START_DATE,
  END_DATE,
  DATE,
  HREF,
  TITLE,
  SUBTITLE,
  DESCRIPTION,
  BULLETS,
}: CardProps) => (
  <div className="p-4 flex flex-col gap-2 rounded border border-light-border dark:border-dark-border">
    <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center">
      <div className="flex grow justify-between">
        <h3 className="w-fit shrink-0">{TITLE}</h3>
        {
          HREF &&
          <a href={HREF} className="rounded hover:bg-light-hover dark:hover:bg-dark-hover transition ease-out" target="_blank">
            <img src={localStorage.getItem("theme") === "light" ?
              "/src/assets/icons/link-external-black.svg" :
              "/src/assets/icons/link-external-white.svg"
            }/>
          </a>
        }
      </div>
      {
        DATE ? <p className="text-sm italic">{DATE}</p> :
        START_DATE && END_DATE && <p className="text-sm italic">{`${START_DATE} – ${END_DATE}`}</p>
      }
    </div>
    {
      SUBTITLE && <p className="text-sm italic">{SUBTITLE}</p>
    }
    {
      DESCRIPTION && <p>{DESCRIPTION}</p>
    }
    {
      BULLETS &&
      <ul className="list-disc list-inside pl-4 gap-2">
        {BULLETS.map(item =>
          <li key={uuidv4()}>{item}</li>
        )}
      </ul>
    }
  </div>
);
