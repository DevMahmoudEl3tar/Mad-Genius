import Head from "next/head";
import dynamic from "next/dynamic";
import "./page.module.css";

const ChatBox = dynamic(() => import("../component/Chat"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Realtime Chat App with Ably, NextJS and Vercel</title>
        <link
          rel="icon"
          href="https://static.ably.dev/motif-red.svg?nextjs-vercel"
          type="image/svg+xml"
        />
      </Head>

      <main>
        <h1 className="title">Next.js Chat Demo</h1>
        <ChatBox />
      </main>

      <footer>Powered by</footer>
    </div>
  );
}
