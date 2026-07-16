import React, { memo } from "react";

const MarkDownToHtml = ({ contentHtml }) => {
  return (
    <div
      className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
};

export const MarkdownToHtml = memo(MarkDownToHtml);
