import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import dummyData from "../pages/dummy/regDataDummy"
//import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'

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
    const handleIncreaseDate = () => {
        this.setState({
            now : now.setDate(now.getDate() + 1)
        })
    }

    // const handleDecreaseDate = () => {
    //     this.setState({
    //         now : now.setDate(now.getDate() - 1)
    //     })
    // }


    // const handleVerticalScroll = () => {
    //     if(true){ // 스크롤이 오른쪽으로 식별
    //         handleIncreaseDate();
    //         if((this.state.now - this.state.originDate) > 10){
    //             this.setState({
    //                 originDate : now
    //                 // 정보 갱신 함수 필요
    //             })
    //         }
    //     }
    //     else if(false){ // 스크롤이 왼쪽으로 식별
    //         handleDecreaseDate();
    //         if((this.state.originDate - this.state.now) > 10){

    //         }
    //     }
    // }

    return(
        <Layout>
            <Navbar/>
            <section className="bg-white">
                <div className='container px-6 py-8 mx-auto'>
                    <div name="nameBar" className='py-2'>
                        <p className='text-2xl pl-2 pb-4' name='deviceName'>{state.deviceName} 예약 현황</p>
                        <hr className='border border-black'/>
                    </div>
                    <div name="time_board" className='border border-gray-300 rounded-t-lg mt-4'>
                        <div name='board_head' className='flex py-3 items-center place-content-around'>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                    <FontAwesomeIcon icon={faCalendar} />
                                </div>
                                <input datepicker="" datepicker-title="Flowbite datepicker" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="날짜 선택"/>
                            </div>
                            <div className='flex items-center'>
                            <button type="button" className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <p className='m-5 text-xl font-medium'>{state.now.getFullYear()}년 {state.now.getMonth()+1}월</p>
                            <button type="button" className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                            <button className="bg-[#2b3d51] hover:bg-gray-900 text-white font-bold rounded w-32 h-12 max-w-lg min-w-fit" onClick={null}>예약 신청</button>
                        </div>
                        <div name='board' className='flex place-content-center border-t border-gray-300'>
                            <table className="container">
                                <thead id="tb_tr" className='border-b border-gray-300'>
                                    {/** 날짜는 자동 계산 */}
                                    <tr className='text-2xl'>
                                        <th className='border-r border-gray-300'></th>
                                        <th className='border-r border-gray-300 px-8'>23</th>
                                        <th className='border-r border-gray-300 px-8'>24</th>
                                        <th className='border-r border-gray-300 px-8'>25</th>
                                        <th className='border-r border-gray-300 px-8'>26</th>
                                        <th className='border-r border-gray-300 px-8'>27</th>
                                        <th className='border-r border-gray-300 px-8'>28</th>
                                        <th className='border-r border-gray-300 px-8'>29</th>
                                    </tr>
                                    <tr>
                                        <th className='border-r border-gray-300'></th>
                                        <th className='border-r border-gray-300'>월</th>
                                        <th className='border-r border-gray-300'>화</th>
                                        <th className='border-r border-gray-300'>수</th>
                                        <th className='border-r border-gray-300'>목</th>
                                        <th className='border-r border-gray-300'>금</th>
                                        <th className='border-r border-gray-300'>토</th>
                                        <th className='border-r border-gray-300'>일</th>
                                    </tr>
                                </thead>
                                <tbody className='text-gray-500'>
                                    <td className='border-r border-gray-300'>
                                        <tr>08:00</tr>
                                        <tr>09:00</tr>
                                        <tr>10:00</tr>
                                        <tr>11:00</tr>
                                        <tr>12:00</tr>
                                        <tr>13:00</tr>
                                        <tr>14:00</tr>
                                        <tr>15:00</tr>
                                        <tr>16:00</tr>
                                        <tr>17:00</tr>
                                        <tr>18:00</tr>
                                        <tr>19:00</tr>
                                    </td>
                                    {/** 데이터로 생성 
                                    <td>
                                        <tr>
                                        ......
                                        </tr>
                                    </td>
                                    */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}