import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'


export default function Home() {
  return (
      <Layout>
        <Navbar />
        <div>
          Up-tempo main page
        </div>
      </Layout>
  )
}