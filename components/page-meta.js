import Head from "next/head";

export default function PageMeta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d2e36"/>
      <meta name="msapplication-TileColor" content="#121317"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap" rel="stylesheet"></link>
    </Head>
  );
}
