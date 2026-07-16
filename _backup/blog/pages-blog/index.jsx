import { getLanguage } from "@/storage/storage";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import query from "@/Query/indexQuery";
import { GraphQLClient } from "graphql-request";
import Blog from "@/component/Blog/Blogs";
import { HeroPost } from "@/component/Blog/BlogHeader/hero-post";
import { SecondaryPost } from "@/component/Blog/BlogHeader/secondary-post";
import { SubscribeForm } from "@/component/Blog/SubscribeForm";
import { Button } from "@/components/ui/button";
import { HiChevronDown } from "react-icons/hi2";
import { BLOGS_ENDPOINT, DEFAULT_COVER, PUBLICATION_HOST } from "@/Contants/constant";
import { CgFileDocument } from "react-icons/cg";


function BlogHeaderSection({ data }) {
  let dataofBlog = data.edges ? data.edges : data;
  const firstPost = dataofBlog[0].node;
  const secondaryPosts = dataofBlog.slice(1, 4).map((post) => {
    return (
      <SecondaryPost
        key={post.node.id}
        title={post.node.title}
        coverImage={post.node.coverImage?.url || DEFAULT_COVER}
        date={post.node.publishedAt}
        slug={post.node.slug}
        excerpt={post.node.brief}
      />
    );
  });
  return (
    <div className="grid items-start gap-4 xl:grid-cols-[3fr_2fr]">
      <div className="col-span-1">
        {firstPost && (
          <HeroPost
            title={firstPost.title}
            coverImage={firstPost.coverImage?.url || DEFAULT_COVER}
            date={firstPost.publishedAt}
            slug={firstPost.slug}
            excerpt={firstPost.brief}
          />
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-4">{secondaryPosts}</div>
    </div>
  );
}

export default function index({ blogData, pageInfo: initialPageInfo }) {
  let from = "blog";
  const router = useRouter();

  const [data, setData] = useState(blogData);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [dynamicCanonicalUrl, setDynamicCanonicalUrl] = useState("");

  useEffect(() => {
    if (currentLanguage === null) {
      let cl = getLanguage();
      if (cl === undefined || cl === null) {
        setCurrentLanguage("en");
      } else {
        setCurrentLanguage(cl);
      }
    }
    if (typeof window !== "undefined") {
      const dynamicUrl = window.location.href;
      setDynamicCanonicalUrl(dynamicUrl);
    }
  }, []);

  const loadMore = async () => {
    if (!pageInfo.hasNextPage) return;

    const client = new GraphQLClient(BLOGS_ENDPOINT);
    const variables = {
      host: PUBLICATION_HOST,
      first: 9,
      after: pageInfo.endCursor,
    };

    try {
      const result = await client.request(query, variables);
      if (result?.publication?.posts) {
        setData((prev) => [...prev, ...result.publication.posts.edges]);
        setPageInfo(result.publication.posts.pageInfo);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  const allPosts = data ?? [];
  const morePosts = allPosts.slice(4);

  return (
    <div
      className={` ms:mx-6 t:mx-20 ms:py-20 l:mx-20 ll:mx-28 imac:px-44 4k:px-56`}
    >
      {/* Empty state */}
      {allPosts.length === 0 && (
        <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 lg:col-start-2 dark:text-neutral-400">
            <div className="w-20">
              <CgFileDocument />
            </div>
            <p className="text-xl font-semibold">
              Hang tight! We&apos;re drafting the first article.
            </p>
          </div>
        </div>
      )}

      {allPosts.length > 0 && <BlogHeaderSection data={data} />}

      {allPosts.length > 0 && (
        <div className="my-8 bg-[#faf5ff] grid grid-cols-4 rounded-lg px-5 py-5 md:py-10 dark:bg-neutral-900">
          <div className="col-span-full md:col-span-2 md:col-start-2">
            <h2 className="text-[#4A3772] dark:text-primary-500 mb-5 text-center text-lg font-semibold">
              Subscribe to our newsletter for updates and changelog.
            </h2>
            <SubscribeForm />
          </div>
        </div>
      )}

      {morePosts.length > 0 && (
        <section className="mb-10 flex flex-col items-start gap-10">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
            More Posts
          </h2>
          <Blog blogData={morePosts} from={from} />
          {pageInfo?.hasNextPage && (
            <div className="flex w-full flex-row items-center justify-center">
              <Button
                onClick={loadMore}
                variant="outline"
                className="rounded-full flex gap-2"
              >
                <HiChevronDown />
                Load more posts
              </Button>
            </div>
          )}
        </section>
      )}

      <NextSeo
        title="Blog - Headsup B2B"
        description="Explore latest blogs on construction materials, solar solutions, and industry insights."
        canonical={dynamicCanonicalUrl}
        openGraph={{
          type: "website",
          url: dynamicCanonicalUrl,
          title: "Blog - Headsup B2B",
          description:
            "Explore latest blogs on construction materials, solar solutions, and industry insights.",
          images: [
            {
              url: "https://www.headsupb2b.com/images/solar-dc-cables.jpg",
              width: 1200,
              height: 630,
              alt: "Headsup B2B Blog",
            },
          ],
          site_name: "Headsup B2B",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />
    </div>
  );
}

export async function getStaticProps() {
  const client = new GraphQLClient(BLOGS_ENDPOINT);
  const variables = { host: PUBLICATION_HOST, first: 10, after: null };
  let data;
  try {
    data = await client.request(query, variables);
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
  }
  return {
    props: {
      blogData: data?.publication?.posts?.edges || [],
      pageInfo: data?.publication?.posts?.pageInfo || null,
    },
    revalidate: 600,
  };
}
