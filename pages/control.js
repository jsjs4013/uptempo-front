import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import axios from 'axios'
import useUser from '../lib/useUser'
import useGetDevice from '../lib/useGetDevice'

import ssrBasecode from '../lib/ssrBasecode'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session';

export default function Control() {
    let currentPage = 1;

    const { user } = useUser();
    const { useDevice } = useGetDevice(user, '/device', true);

    return (
        <Layout currentPage={currentPage}>
            {console.log(useDevice)}
            <div className='relative w-2/6 h-1/2 overflow-hidden'>
                <iframe src="http://61.74.187.4:7100/#!/control/R3CT104SAYT" width="1250" height="1200" scrolling="no" frameBorder="300"></iframe>
            </div>
        </Layout>
  )
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    return ssrBasecode(req, res, 1);
  },
  sessionOptions)