import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { useEffect } from "react";

import router from 'next/router';

export default function Home() {
    useEffect(() => {

    }, []);

    let currentPage = 1

    return (
        <Layout currentPage={currentPage}>
            <div>
                <iframe src={`http://61.74.187.4:7100/#!/control${router.asPath}`}></iframe>
            </div>
        </Layout>
    )
}