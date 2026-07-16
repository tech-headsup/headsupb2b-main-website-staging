import React, { useRef, useEffect } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { motion, useScroll } from "framer-motion";
import blogSchema from "@/schemas/blogSchema"; // ← BlogPosting + BreadcrumbList JSON-LD

import { PostHeader } from "@/component/Blog/PostHeader";
import { PostTOC } from "@/component/Blog/PostTOC";
import { MarkdownToHtml } from "@/component/Blog/MarkdownToHtml";
import AboutAuthor from "@/component/Blog/AboutAuthor";
import MobileDrawer from "@/component/Blog/MobileDrawer";
import GetInTouch from "@/component/Blog/GetInTouch";
import { wpPostToHashnodeDetail } from "@/lib/wpAdapter";

const WP_API_SERVER = process.env.WP_API_URL || "http://localhost:10008/wp-json/wp/v2";
const BLOG_BASE = process.env.NEXT_PUBLIC_WP_BLOG_BASE || "http://localhost:10008";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.headsupb2b.com";

export async function getServerSideProps(context) {
  const requestedSlug = context.params.id;
  const slug = encodeURIComponent(requestedSlug);
  const url = `${WP_API_SERVER}/posts?slug=${slug}&_embed=wp:featuredmedia,wp:term,author`;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return { notFound: true };
    const arr = await res.json();
    const wpPost = Array.isArray(arr) ? arr[0] : null;
    if (!wpPost) return { notFound: true };
    if (wpPost.slug && wpPost.slug !== requestedSlug) {
      return {
        redirect: {
          destination: `/blog/${wpPost.slug}`,
          permanent: true,
        },
      };
    }
    const post = wpPostToHashnodeDetail(wpPost, { blogBase: BLOG_BASE });
    const publication = {
      isTeam: false,
      links: {},
    };
    return { props: { post, publication } };
  } catch {
    return { notFound: true };
  }
}

export default function BlogPage({ post, publication }) {
  const { scrollYProgress } = useScroll();
  const triggerRef = useRef(null);
  const middleGridRef = useRef(null);
  const rightGridRef = useRef(null);

  const seo = {
    title: post?.seo?.title || post?.title,
    description: post?.seo?.description || post?.brief,
    url: `${SITE_URL}/blog/${post?.slug}`,
    image: post?.ogMetaData?.image || post?.coverImage?.url,
    date: post?.publishedAt,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (middleGridRef.current && rightGridRef.current) {
        const top = rightGridRef.current.scrollTop;
        if (top != null) middleGridRef.current.scrollTop = top;
      }
    };
    const el = rightGridRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        className="bg-headupb2b fixed left-0 right-0 top-0 z-50 h-1 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <NextSeo
        title={seo.title}
        description={seo.description}
        canonical={seo.url}
        openGraph={{
          type: "article",
          url: seo.url,
          title: seo.title,
          description: seo.description,
          images: seo.image
            ? [{ url: seo.image, width: 1200, height: 630, alt: seo.title }]
            : [],
          site_name: "Headsup B2B",
          article: { publishedTime: seo.date },
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />

      {/* BlogPosting + BreadcrumbList JSON-LD schema (source: B2B schema blog.pdf) */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blogSchema({
              title: seo.title,
              description: seo.description,
              image: seo.image,
              url: seo.url,
              datePublished: post?.publishedAt,
              dateModified: post?.updatedAt,
            }),
          }}
          key="blog-posting-jsonld"
        />
      </Head>

      <div className="mx-auto my-10 w-full max-w-[1600px] px-4 lg:px-6 py-14">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage?.url}
          date={post.publishedAt}
          author={post.author}
          readTimeInMinutes={post.readTimeInMinutes}
          url={seo.url}
          post={post}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)_300px] ll:mx-10 pb-10">
        {post.features?.tableOfContents?.isEnabled ? (
          <aside className="sticky top-0 hidden h-screen overflow-y-auto lg:block">
            <div ref={triggerRef} className="px-4 py-6">
              <PostTOC post={post} />
            </div>
          </aside>
        ) : (
          <div className="hidden lg:block" />
        )}

        <main
          ref={middleGridRef}
          className="min-h-screen overflow-y-auto px-4 lg:px-6 lg:mt-0 mt-[-30px]"
        >
          <div className="mx-auto max-w-3xl">
            <MarkdownToHtml contentHtml={post.content?.html || ""} />
            {post.tags?.length > 0 && (
              <div className="mt-8 px-5 md:max-w-screen-md mx-auto">
                <ul className="flex flex-wrap gap-2 text-sm">
                  {post.tags.map((tag) => (
                    <li key={tag.id}>
                      <div className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 md:px-4 dark:border-neutral-800 dark:hover:bg-neutral-800">
                        {tag.name || tag.slug}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <AboutAuthor url={seo.url} post={post} publication={publication} />
          </div>
        </main>

        <aside
          ref={rightGridRef}
          className="sticky top-0 hidden h-screen overflow-y-auto lg:block"
        >
          <div className="px-4">
            <div className="sticky top-6">
              <GetInTouch />
            </div>
          </div>
        </aside>
      </div>

      <MobileDrawer />
    </>
  );
}
