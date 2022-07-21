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
import Router from 'next/router'

export default function Control() {
    let currentPage = 1;

    const { user } = useUser();
    const { userDevice } = useGetDevice({
        user: user, 
        redirectTo: '/device',
        redirectDevice: true});

    return (
        <Layout currentPage={currentPage}>
                {
                    !userDevice?.isChangeDevice &&
                    <iframe src={`http://61.74.187.4:7100/#!/control/${user?.device}`} scrolling="no"
                        className='absolute w-full'></iframe>
                }
        </Layout>
  )
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    return ssrBasecode(req, res, 1);
  },
  sessionOptions)