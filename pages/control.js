import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useEffect } from 'react'

export default function Control() {
    let currentPage = 1

    useEffect(() => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://61.74.187.4:7100/#!/control/R3CT104SAYT', true);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Authorization', 'Bearer 642e2d33537442efa0cec64de531b3db1514a99d9d834dcd867ea03e22d1428f');
        xhr.send(null);
    }, []);

    return (
        <Layout currentPage={currentPage}>
            <div>
                Up-tempo sample control page
            </div>
        </Layout>
  )
}