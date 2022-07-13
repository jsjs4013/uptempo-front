import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { useEffect, useState } from "react";
import io from 'socket.io-client';
import axios from 'axios';

let socket;
export default function DeviceCtrl() {
    let currentPage = 1

    const [input, setInput] = useState('');

    const socketHeader = {
        'Access-Control-Allow-Origin': true
    };

    useEffect(() => {
        socketInitializer();
    }, []);
    
    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io();
        socket.open((msg) => {console.log(msg)});
    };
    

    return (
        <Layout currentPage={currentPage}>
            <div>

            </div>
        </Layout>
    )
}