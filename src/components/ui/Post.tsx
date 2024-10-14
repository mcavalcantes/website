import React from "react";

interface PostProps {
  children: React.ReactNode;
}

export const Post = ({ children }: PostProps) => (
  <article className="text-lg flex flex-col gap-4">
    {children}
  </article>
);
