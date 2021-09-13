import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import Container from '../src/layout/Container'
import Main from '../src/layout/Main'
import Button from '../src/ui/Button'

const Title = styled.h1`
  line-height: .5;
  font-size: 4rem;
`
const Subtitle = styled.h2`
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 500;
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
        <Title>TikTok Influencer Search</Title>
        <Subtitle>MetNu Internal Tool</Subtitle>
        <Button primary>Get Started</Button>
      </Main>

      <Footer />

    </Container>
  )
}

export default Home