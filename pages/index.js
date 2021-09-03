import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MetNu Influencer Search</title>
        <meta name="description" content="Powered by NextJS and React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        *header here*
      </header>

      <main className={styles.main}>

        <h1 className={styles.title}>
          TikTok Influencer Search
        </h1>

        <p className={styles.description}>
          MetNu Internal Tool
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.metnu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MetNu Home
        </a>

      </footer>
    </div>
  )
}
