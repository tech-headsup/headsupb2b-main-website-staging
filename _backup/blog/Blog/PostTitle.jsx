import React from "react";

export const PostTitle = ({ children }) => {
  return (
    <div className="prose-lg md:prose-md dark:prose-invert prose-h1:text-center mx-auto max-w-screen-lg px-5">
      <h1 className="ms:text-3xl ll:text-5xl imac:text-6xl text-center font-bold">
        {children}
      </h1>
    </div>
  );
};
