import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

export default function Control() {
    let currentPage = 1

    return (
        <Layout currentPage={currentPage}>
            <div>
                Up-tempo sample control page
            </div>
        </Layout>
  )
}