import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/RexfordEssilfie/vercel-api-languages">
            vercel-api-languages!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>api/pages/typescript.ts</code>,
          <code className={styles.code}>api/rust.rs</code>,
          <code className={styles.code}>api/go.go</code>, or
          <code className={styles.code}>api/python.py</code>
        </p>

        <h1>API Routes</h1>
        <div className={styles.grid}>
          <Link href="/api/typescript" className={styles.card}>
            <h2>api/typescript &rarr;</h2>
            <p>Visit Typescript API endpoint.</p>
          </Link>

          <Link href="/api/rust" className={styles.card}>
            <h2>api/rust &rarr;</h2>
            <p>Visit Rust API endpoint.</p>
          </Link>

          <Link href="/api/go" className={styles.card}>
            <h2>api/go &rarr;</h2>
            <p>Visit Go API endpoint.</p>
          </Link>

          <Link href="/api/python" className={styles.card}>
            <h2>api/python &rarr;</h2>
            <p>Visit Python API endpoint.</p>
          </Link>
        </div>

        <h1>Links</h1>
        <div className={styles.grid}>
          <Link
            href="https://github.com/RexfordEssilfie/vercel-api-languages"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>Go to the repository for this page on Github.</p>
          </Link>
          <Link
            href="https://vercel.com/docs/concepts/functions/serverless-functions/quickstart"
            className={styles.card}
          >
            <h2>Learn More &rarr;</h2>
            <p>Read on Vercel Serverless Functions.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
