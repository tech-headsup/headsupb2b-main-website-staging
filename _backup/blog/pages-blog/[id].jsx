import React from "react";
import { NextSeo } from "next-seo";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { PostHeader } from "@/component/Blog/PostHeader";
import { PostTOC } from "@/component/Blog/PostTOC";
import { MarkdownToHtml } from "@/component/Blog/MarkdownToHtml";
import AboutAuthor from "@/component/Blog/AboutAuthor";
import MobileDrawer from "@/component/Blog/MobileDrawer";
import GetInTouch from "@/component/Blog/GetInTouch";
import { BLOGS_ENDPOINT, PUBLICATION_HOST } from "@/Contants/constant";

// ✅ Hashnode GraphQL Query
const GET_POST = `
query GetPost($host: String!, $slug: String!) {
  publication(host: $host) {
    id
    title
    isTeam
    links {
      twitter
      instagram
      github
      website
      hashnode
      youtube
      dailydev
      linkedin
      mastodon
    }
    post(slug: $slug) {
      id
      title
      brief
      subtitle
      publishedAt
      updatedAt
      slug
      url
      readTimeInMinutes
      hasLatexInPost
      coAuthors {
        id
        username
        name
        profilePicture
      }
      author {
        id
        username
        name
        profilePicture
      }
      content {
        html
        markdown
      }
      coverImage {
        url
      }
      tags {
        id
        name
        slug
      }
      features {
        tableOfContents {
          isEnabled
          items {
            id
            level
            slug
            title
            parentId
          }
        }
      }
      preferences {
        disableComments
      }
      comments(first: 0) {
        totalDocuments
      }
      seo {
        title
        description
      }
      ogMetaData {
        image
      }
    }
  }
}
`;

// ✅ SERVER SIDE FETCH
export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(BLOGS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_POST,
      variables: {
        host: PUBLICATION_HOST,
        slug: id,
      },
    }),
  });

  const json = await res.json();
  const rawPost = json?.data?.publication?.post;
  const publication = json?.data?.publication;

  if (!rawPost) {
    return { notFound: true };
  }

  return {
    props: {
      post: rawPost,
      publication: publication,
    },
  };
}


// ✅ MAIN COMPONENT
export default function BlogPage({ post, publication }) {
  const { scrollYProgress } = useScroll();
  const triggerRef = useRef(null);
  const middleGridRef = useRef(null);
  const rightGridRef = useRef(null);

  const seo = {
    title: post?.seo?.title || post?.title,
    description: post?.seo?.description || post?.brief,
    url: `https://www.headsupb2b.com/blog/${post?.slug}`,
    image: post?.ogMetaData?.image || post?.coverImage?.url,
    date: post?.publishedAt,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (middleGridRef.current && rightGridRef.current) {
        const rightGridScrollTop = rightGridRef.current.scrollTop;
        if (rightGridScrollTop !== null) {
          middleGridRef.current.scrollTop = rightGridScrollTop;
        }
      }
    };

    const rightGridElement = rightGridRef.current;
    if (rightGridElement) {
      rightGridElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (rightGridElement) {
        rightGridElement.removeEventListener("scroll", handleScroll);
      }
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
          images: [
            {
              url: seo.image,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ],
          site_name: "Headsup B2B",
          article: {
            publishedTime: seo.date,
          },
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />

      <div className="mx-auto my-10 w-full max-w-[1600px] px-4 lg:px-6 py-14">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage?.url}
          date={post.publishedAt}
          author={post.author}
          readTimeInMinutes={post.readTimeInMinutes}
          url={post.url}
          post={post}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)_300px] ll:mx-10 pb-10">
        {/* Left Sidebar - Table of Contents */}
        {post.features?.tableOfContents?.isEnabled ? (
          <aside className="sticky top-0 hidden h-screen overflow-y-auto lg:block">
            <div ref={triggerRef} className="px-4 py-6">
              <PostTOC post={post} />
            </div>
          </aside>
        ) : (
          <div className="hidden lg:block"></div>
        )}

        {/* Main Content */}
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
                        {tag.slug}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <AboutAuthor url={post.url} post={post} publication={publication} />
          </div>
        </main>

        {/* Right Sidebar */}
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
