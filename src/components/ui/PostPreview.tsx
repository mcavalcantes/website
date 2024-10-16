import Markdown from "react-markdown";

interface PostPreviewProps {
  DATE: string;
  HREF: string;
  TITLE: string;
  PREVIEW: string;
}

export const PostPreview = ({ DATE, HREF, TITLE, PREVIEW }: PostPreviewProps) => (
  <div className="p-4 flex flex-col gap-2 rounded border border-light-border dark:border-dark-border">
    <h2 className="py-0 w-fit shrink-0">{TITLE}</h2>
    <span className="text-sm italic">{DATE}</span>
    <div className="line-clamp-6 md:line-clamp-5 xl:line-clamp-4">
      <Markdown>
        {PREVIEW}
      </Markdown>
    </div>
    <a
      href={HREF}
      className="px-0.5 w-fit self-end underline decoration-dotted underline-offset-2 bg-light-hover dark:bg-dark-hover"
    >
      Continuar lendo
    </a>
  </div>
);
