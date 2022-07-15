import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import axios from 'axios'

export default function Control() {
    let currentPage = 1;

    const redirectHeader1 = {
        method: "GET",
        url: 'http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1Nzg2MDI0NDAzNn0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYWRzIn0.4JyaSmF64ypFDzW3oY06yaAfNG3D3LyWVmxwylVoWsE',
        headers: {
            'Content-type': 'application/json',
        },
        responseType:'json',
        withCredentials: true
    };

    const redirectHeader = {
        method: "GET",
        withCredentials: true,
      };

    useEffect(() => {
        const asd = async () => {
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://61.74.187.4:7100/#!/control/R3CT104SAYT', true);
        // xhr.withCredentials = true;
        // xhr.setRequestHeader('Authorization', 'Bearer 642e2d33537442efa0cec64de531b3db1514a99d9d834dcd867ea03e22d1428f');
        // xhr.send(null);

        // const datas = async () => {
        //     const data = await axios('http://61.74.187.4:7100/#!/control/R3CT104SAYT', redirectHeader);
        //     console.log(data);
        // }

        // datas();

        try {
            const temp = await axios(redirectHeader1);
            const data2 = temp.headers;
            console.log('hi');
            console.log(data2);
        } catch (error) {
            console.log(error.message)
            throw new Error({name: error.name, message: (error).message });
        }
    }

    asd();
    }, []);

    return (
        <Layout currentPage={currentPage}>
            <div>
                Up-tempo sample control page
            </div>
        </Layout>
  )
}