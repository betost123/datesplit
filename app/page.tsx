import Image from "next/image";
import styles from "./page.module.css";
import BettysAd from "./components/atom/Ad";

export default function Home() {
  return (
    <main className={styles.main}>
      Welcome to DateSplit!
      <BettysAd />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7644729638272332"
        data-ad-slot="5413643973"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7644729638272332"
        crossOrigin="anonymous"
      ></script>
    </main>
  );
}
