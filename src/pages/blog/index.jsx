import { useCallback, useEffect, useRef, useState } from "react";
import { NextSeo } from "next-seo";
import { CgFileDocument } from "react-icons/cg";
import { HiChevronDown } from "react-icons/hi2";

import Blog from "@/component/Blog/Blogs";
import { HeroPost } from "@/component/Blog/BlogHeader/hero-post";
import { SecondaryPost } from "@/component/Blog/BlogHeader/secondary-post";
import { SubscribeForm } from "@/component/Blog/SubscribeForm";
import { Button } from "@/components/ui/button";
import { wpListToHashnodeEdges } from "@/lib/wpAdapter";
import { DEFAULT_COVER } from "@/Contants/constant";

const WP_API_SERVER = process.env.WP_API_URL || "http://localhost:10008/wp-json/wp/v2";
const WP_API_PUBLIC =
  process.env.NEXT_PUBLIC_WP_API_URL || "http://localhost:10008/wp-json/wp/v2";
const PER_PAGE = 9;

export async function getServerSideProps() {
  const url = `${WP_API_SERVER}/posts?per_page=${PER_PAGE}&page=1&_embed=wp:featuredmedia,wp:term`;
  let initialEdges = [];
  let totalPages = 1;
  let totalPosts = 0;
  let error = null;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`WP HTTP ${res.status}`);
    totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1", 10);
    totalPosts = parseInt(res.headers.get("x-wp-total") || "0", 10);
    const wpPosts = await res.json();
    initialEdges = wpListToHashnodeEdges(wpPosts);
  } catch (err) {
    error = err.message;
  }
  return { props: { initialEdges, totalPages, totalPosts, error } };
}

function BlogHeaderSection({ edges }) {
  const first = edges[0]?.node;
  const secondary = edges.slice(1, 4).map((post) => (
    <SecondaryPost
      key={post.node.id}
      title={post.node.title}
      coverImage={post.node.coverImage?.url || DEFAULT_COVER}
      date={post.node.publishedAt}
      slug={post.node.slug}
      excerpt={post.node.brief}
    />
  ));
  return (
    <div className="grid items-start gap-4 xl:grid-cols-[3fr_2fr]">
      <div className="col-span-1">
        {first && (
          <HeroPost
            title={first.title}
            coverImage={first.coverImage?.url || DEFAULT_COVER}
            date={first.publishedAt}
            slug={first.slug}
            excerpt={first.brief}
          />
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-4">{secondary}</div>
    </div>
  );
}

export default function BlogIndex({ initialEdges, totalPages, totalPosts, error }) {
  const [edges, setEdges] = useState(initialEdges || []);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(totalPages <= 1);
  const [loadError, setLoadError] = useState(null);
  const sentinelRef = useRef(null);
  const fetchingRef = useRef(false);
  const [dynamicCanonical, setDynamicCanonical] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setDynamicCanonical(window.location.href);
  }, []);

  const loadMore = useCallback(async () => {
    if (fetchingRef.current || done) return;
    fetchingRef.current = true;
    setLoading(true);
    setLoadError(null);
    try {
      const next = page + 1;
      const url = `${WP_API_PUBLIC}/posts?per_page=${PER_PAGE}&page=${next}&_embed=wp:featuredmedia,wp:term`;
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const batch = await res.json();
      const newEdges = wpListToHashnodeEdges(batch);
      setEdges((prev) => {
        const seen = new Set(prev.map((e) => e.node.id));
        const merged = [...prev];
        for (const e of newEdges) if (!seen.has(e.node.id)) merged.push(e);
        return merged;
      });
      setPage(next);
      const tp = parseInt(res.headers.get("x-wp-totalpages") || "1", 10);
      if (next >= tp || batch.length === 0) setDone(true);
    } catch (err) {
      setLoadError(err.message);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, [page, done]);

  // IntersectionObserver — auto-load when sentinel near viewport
  useEffect(() => {
    if (done || !sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) loadMore();
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loadMore, done]);

  const morePosts = edges.slice(4);

  return (
    <div className="ms:mx-6 t:mx-20 ms:py-20 l:mx-20 ll:mx-28 imac:px-44 4k:px-56">
      {edges.length === 0 && (
        <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 lg:col-start-2 dark:text-neutral-400">
            <div className="w-20">
              <CgFileDocument />
            </div>
            <p className="text-xl font-semibold">
              {error
                ? `Could not load posts: ${error}`
                : "Hang tight! We're drafting the first article."}
            </p>
          </div>
        </div>
      )}

      {edges.length > 0 && <BlogHeaderSection edges={edges} />}

      {edges.length > 0 && (
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
          <Blog blogData={morePosts} from="blog" />

          {!done && <div ref={sentinelRef} aria-hidden="true" className="h-1 w-full" />}

          {loadError && (
            <div className="w-full text-center text-sm text-red-600">
              Failed to load more: {loadError}
            </div>
          )}

          <div className="flex w-full flex-row items-center justify-center">
            {!done ? (
              <Button
                onClick={loadMore}
                disabled={loading}
                variant="outline"
                className="rounded-full flex gap-2"
              >
                <HiChevronDown />
                {loading ? "Loading…" : "Load more posts"}
              </Button>
            ) : (
              <p className="text-sm text-slate-500 dark:text-neutral-400">
                You&apos;ve reached the end.
              </p>
            )}
          </div>
          {totalPosts > 0 && (
            <p className="w-full text-center text-xs uppercase tracking-wider text-slate-400">
              {edges.length} of {totalPosts} posts
            </p>
          )}
        </section>
      )}

      <NextSeo
        title="Blog - Headsup B2B"
        description="Explore latest blogs on construction materials, solar solutions, and industry insights."
        canonical={dynamicCanonical}
        openGraph={{
          type: "website",
          url: dynamicCanonical,
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
