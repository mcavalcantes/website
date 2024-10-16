import Markdown from "react-markdown";

interface PostProps {
  DATE: string;
  TITLE: string;
  CONTENT: string;
}

export const Post = ({ DATE, TITLE, CONTENT }: PostProps) => (
  <article className="text-lg flex flex-col gap-4">
    <h1>{TITLE}</h1>
    <span className="text-sm italic">{DATE}</span>
    <Markdown>{CONTENT}</Markdown>
  </article>
);
