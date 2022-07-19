import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import io from 'socket.io-client';
import axios from 'axios';
import { useRouter } from 'next/router'

let socket;
export default function DeviceCtrl() {
    let currentPage = 1

    const router = useRouter();

    const [input, setInput] = useState('');

    useEffect(() => {
        openDevicePage();
    }, []);

    const openDevicePage = async () => {
    }
    

    return (
        <Layout currentPage={currentPage}>
            <div>
                {console.log(router.query)}
                <iframe src="http://61.74.187.4:7100/#!/control/R3CT104SAYT" width="860" height="140" scrolling="no"frameBorder="0"></iframe>
            </div>
        </Layout>
    )
}