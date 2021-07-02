import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Scholarfy!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/books">
            <div className={styles.card}>
              <h3>Books &rarr;</h3>
              <p>
                Get a look at all our books of maths and science in onur book
                store.
              </p>
            </div>
          </Link>

          <Link href="/videos">
            <div className={styles.card}>
              <h3>Videos &rarr;</h3>
              <p>Learn using videos from our trusted youtubers videos!</p>
            </div>
          </Link>

          <Link href="/more">
            <div className={styles.card}>
              <h3>More &rarr;</h3>
              <p>Discover more from and get familiar with us.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://songezo-mtengwana.web.app/">
          Copyrights &copy; 2021 Scholarfy
        </a>
      </footer>
    </div>
  );
}
