import React from "react";
import BlogItem from "@/pages/blog/BlogItem"; // adjust path if needed

function Blog({ blogData, from }) {
  const data = blogData ?? [];
  const items = from === "home" ? data.slice(0, 3) : data;
  if (!items.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((ele, index) => (
          // Border + hover live HERE (wrapper) — same as MainCategory → ProductCard
          <div
            key={ele?.node?.id ?? index}
            className="rounded-2xl border border-[#e5e5e5] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8]"
          >
            <BlogItem ele={ele} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;