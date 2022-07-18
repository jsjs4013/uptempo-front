import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import axios from 'axios'

export default function Control() {
    let currentPage = 1;

    return (
        <Layout currentPage={currentPage}>
            <div>
                Up-tempo sample control page

                <iframe src="http://61.74.187.4:7100/#!/control/R3CT104SAYT" width="860" height="840" scrolling="no"frameBorder="0"></iframe>
            </div>
        </Layout>
  )
}