import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import dummyData from "../pages/dummy/regDataDummy"
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

export default function Register() {
    let currentPage = 7;
    let l_today = new Date();

    let state = {
        deviceName : "Galaxy S22",
        originDate : l_today,
        now: l_today,
        data : []
    };

    const [data, setData] = useState(dummyData.regData);
    console.log(dummyData.regData)
    
    const handleIncreaseDate = () => {
        this.setState({
            now : now.setDate(now.getDate() + 1)
        })
    }

    const handleDecreaseDate = () => {
        this.setState({
            now : now.setDate(now.getDate() - 1)
        })
    }


    const handleVerticalScroll = () => {
        if(true){ // 스크롤이 오른쪽으로 식별
            handleIncreaseDate();
            if((this.state.now - this.state.originDate) > 10){
                this.setState({
                    originDate : now
                    // 정보 갱신 함수 필요
                })
            }
        }
        else if(false){ // 스크롤이 왼쪽으로 식별
            handleDecreaseDate();
            if((this.state.originDate - this.state.now) > 10){

            }
        }
    }

    return(
        <Layout>
            <Navbar/>
            <section className="bg-white">
                <div className='container px-6 py-8 mx-auto'>
                    <div name="nameBar" className='py-2'>
                        <p className='text-2xl pl-2 pb-4' name='deviceName'>{state.deviceName} 예약 현황</p>
                        <hr className='border-2 border-black'/>
                    </div>
                    <div name="mainTB">
                        <div>
                        </div>
                        <div>
                            <p className='text-l'>{state.now.getFullYear()}년 {state.now.getMonth()+1}월</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}