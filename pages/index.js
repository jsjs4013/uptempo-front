import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Logo from "../public/logo.svg"

export default function Home() {
  return (
      <>
        <Head>
          <title>Up-tempo</title>
          <meta name="description" content="Up-tempo device farm" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div>
          Up-tempo main page
        </div>
    </>
  )
}