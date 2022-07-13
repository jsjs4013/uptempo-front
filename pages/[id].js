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
        
        socket.on('connect', () => {
            console.log('connected');
        });

        socket.on('update-input', msg => {
            setInput(msg);
        });
    };
    
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        socket.emit('input-change', e.target.value);
    };
    

    return (
        <Layout currentPage={currentPage}>
            <div>
                {/* <input
                    placeholder="Type something"
                    value={input}
                    onChange={onChangeHandler}
                /> */}
            </div>
        </Layout>
    )
}