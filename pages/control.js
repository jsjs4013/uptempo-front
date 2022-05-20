import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Logo from "../public/logo.svg"
import Layout from '../components/Layout'

export default function Control() {
    let currentPage = 1

    return (
        <Layout>
            <Navbar currentPage={currentPage} />
            <div>
                Up-tempo sample control page
            </div>
        </Layout>
  )
}