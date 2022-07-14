import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import io from 'socket.io-client';
import axios from 'axios';

let socket;
export default function DeviceCtrl() {
    let currentPage = 1

    const [input, setInput] = useState('');

    useEffect(() => {
        openDevicePage();
    }, []);

    const openDevicePage = async () => {
        window.open('http://61.74.187.4:7100/#!/control/R3CT104SAYT', '_blank', 'width=700, height=1000', 'scrollbars=no');
    }
    

    return (
        <Layout currentPage={currentPage}>
            <div>
                
            </div>
        </Layout>
    )
}