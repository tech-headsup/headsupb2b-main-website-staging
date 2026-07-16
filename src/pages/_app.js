import Layout from "@/Layout/Layout";
import { getLanguage, setLanguage } from "@/storage/storage";
import "@/styles/globals.css";
// import "@/styles/icon.css";
import { useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
// import { AnimatePresence, motion, progress } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import dynamicImport from "next/dynamic";
import { allPageScript } from "@/component/SEOScripts/AllPageScript";
import Script from "next/script";

// Dev-only — production build tree-shakes this away because dynamicImport's
// loader never runs when the component itself isn't rendered.
const ReactQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : dynamicImport(
        () =>
          import("@tanstack/react-query-devtools").then(
            (m) => m.ReactQueryDevtools
          ),
        { ssr: false }
      );

const client = new ApolloClient({
  uri: "https://admin.headsupb2b.com/graphql",
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

function schema() {
  return {
    __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11484520855');
    `,
  };
}

function metaPixelScript() {
  return {
    __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '468463856066805');
        fbq('track', 'PageView');
    `,
  };
}

export default function App({ Component, pageProps, router }) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  useEffect(() => {
    let cl = getLanguage();
    if (cl === undefined || cl === null) {
      setLanguage("en");
    }
  }, []);

  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  //   (function () {
  //     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  //     s1.async = true;
  //     s1.src = 'https://embed.tawk.to/66c5b5d0ea492f34bc0875d5/1i5q4sef7';
  //     s1.charset = 'UTF-8';
  //     s1.setAttribute('crossorigin', '*');
  //     s0.parentNode.insertBefore(s1, s0);
  //   })();
  // }, []);

  return (
    <AnimatePresence>
      <Head>
        <style>
          {`
          body {
                font-family: "Montserrat", sans-serif;
                color: #404040;
        }
    `}
        </style>
      </Head>

      {/* ── 3rd-party scripts — all lazyOnload so they never block TBT/Speed Index ── */}
      {/* GTM (GTM-PWPLHZGR) and GA4 (G-EL9S9Y3SXG) are injected in <head> via _document.js */}
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={metaPixelScript()}
      />
      <Script
        id="gtag-loader"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11484520855"
      />
      <Script
        id="gtag-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={schema()}
      />
      <Script
        id="tawk"
        strategy="lazyOnload"
        src="https://embed.tawk.to/66c5b5d0ea492f34bc0875d5/1i5q4sef7"
        charset="UTF-8"
        crossOrigin="*"
      />
      {/* 
      <script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        widget-id="mI32y8"
      >
      </script> */}
      {/* <motion.div
        transition={spring}
        key={router.pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        id="page-transition-container"> */}
      <ApolloProvider client={client}>
        {/* <Layout>
          {}
          <Component {...pageProps} />
        </Layout> */}
        <QueryClientProvider client={queryClient}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApolloProvider>
      {/* </motion.div> */}
      //{" "}
    </AnimatePresence>
  );
}
