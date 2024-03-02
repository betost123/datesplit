import Image from "next/image";
import styles from "./page.module.css";
import BettysAd from "./components/atom/Ad";

export default function Home() {
  return (
    <main className={styles.main}>
      Welcome to DateSplit!
      <BettysAd />
    </main>
  );
}
