import React from "react";

const mapTableOfContentItems = (toc) => {
  try {
    return (toc ?? []).map((tocItem) => {
      const item = Array.isArray(tocItem) ? tocItem[0] : tocItem;
      return {
        id: item.id,
        level: item.level,
        slug: item.slug,
        title: item.title,
        parentId: item.parentId ?? null,
      };
    });
  } catch (error) {
    console.error("Error while mapping table of content items", {
      error,
    });
    return [];
  }
};

const Toc = ({ data, parentId }) => {
  const children = data.filter((item) => item.parentId === parentId);
  if (children.length === 0) return null;

  return (
    <ul className="mt-2 flex flex-col ll:gap-2 l:gap-1 gap-2 font-medium text-slate-800 dark:text-neutral-200 max-w-md list-inside">
      {children.map((item) => (
        <li key={item.id}>
          <a
            href={`#heading-${item.slug}`}
            className="hover:text-headupb2b l:text-[14px] ll:text-[16px] hover:underline"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const PostTOC = ({ post }) => {
  if (!post || !post.features?.tableOfContents?.isEnabled) return null;

  return (
    <div className="w-full md:px-2 ms:px-1">
      <div className="mx-auto w-full max-w-screen-md bg-purple rounded-lg border border-b-4 border-r-4 border-headupb2b text-base leading-none dark:border-headupb2b dark:text-neutral-50 ms:p-6 t:p-3 ll:p-6 md:text-lg">
        <h2 className="mb-1 text-lg font-bold ll:text-lg">Table of contents</h2>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        <Toc
          parentId={null}
          data={mapTableOfContentItems(post.features.tableOfContents.items)}
        />
      </div>
    </div>
  );
};
