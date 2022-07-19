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
            <div className='absolute left-1/2 '>
                <iframe src="http://61.74.187.4:7100/#!/control/R3CT104SAYT" width="1000" height="1000" scrolling="no" frameborder="0"></iframe>
            </div>
        </Layout>
  )
}