import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// component
import HeaderNav from '../component/HeaderNav'
import HeroSlider from '../component/HeroSlider'
import Shop from '../component/Shop';
import Gaming from '../component/Gaming'
import LatestNews from '../component/LatestNews'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nvidia clone site</title>
        <meta name="description" content="Nvidia cloning site for learning purpose only" />
        <link rel="icon" href="/asset/nvidia-logo.png" />
      </Head>

      <main>
        <HeaderNav />
        <HeroSlider />
        <Shop />
        <Gaming />
        <LatestNews />
      </main>
    </div>
  )
}

export default Home
