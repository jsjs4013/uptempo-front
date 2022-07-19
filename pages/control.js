import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import axios from 'axios'
import useUser from '../lib/useUser'

export default function Control() {
    let currentPage = 1;

    const { user } = useUser({
        redirectTo: "/",
        redirectIfFound: false,
    });

    return (
        <Layout currentPage={currentPage}>
            <div>
                Up-tempo sample control page

                <iframe src="http://61.74.187.4:7100/#!/control/R3CT104SAYT" width="260" height="840" scrolling="no"frameBorder="0"></iframe>
            </div>
        </Layout>
  )
}