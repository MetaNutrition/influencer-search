import Head from 'next/head'
import styled from 'styled-components'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.div`
  padding: 2rem 0;
  flex: 1;
  flex-direction: column;
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 1rem;
  padding: 1rem;
  width: 200px;
  height: 60px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  background: ${props => props.primary ? "black" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
`

const Home = () => {
  return (
    <Container>
      <Head>
        <title>MetNu Influencer Search</title>
        <meta name="description" content="Powered by NextJS and React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Button>Ding Dongus</Button>
        <Button primary>Bong Bingus</Button>
      </Main>

      <Footer />

    </Container>
  )
}

export default Home;

// export default function Home() {
//   return (
//     <div className={styles.container}>
// <Head>
//   <title>MetNu Influencer Search</title>
//   <meta name="description" content="Powered by NextJS and React" />
//   <link rel="icon" href="/favicon.ico" />
// </Head>

      // <header className={styles.header}>
      //   <ul>
      //     <li>
      //       Search
      //     </li>
      //     <li>
      //       Saved
      //     </li>
      //     <li>
      //       About
      //     </li>
      //   </ul>
      // </header>

//       <main className={styles.main}>

//         <h1 className={styles.title}>
//           TikTok Influencer Search
//         </h1>

//         <p className={styles.subtitle}>
//           MetNu Internal Tool
//         </p>

//         <p className={styles.startBox}>Get Started</p>

//       </main>

//       <footer className={styles.footer}>
        // <a
        //   href="https://www.metnu.com/"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   MetNu Home
        // </a>

//       </footer>
//     </div>
//   )
// }
