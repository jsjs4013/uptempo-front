import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import dummyData from "../pages/dummy/regDataDummy"
//import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'

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
                        <div name='board' className='container place-content-center border-t border-gray-300'>
                            {/** 변경 대상 */}
                            <div>
                                <div name="dd" className='grid grid-cols-8 text-center'>
                                    <div></div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                </div>
                                <div className='grid grid-cols-8 text-center border-b border-gray-300'>
                                    <div></div>
                                    <div>일</div>
                                    <div>월</div>
                                    <div>화</div>
                                    <div>수</div>
                                    <div>목</div>
                                    <div>금</div>
                                    <div>토</div>
                                </div>
                            </div>
                            <div className='grid grid-cols-8 text-center'>
                                <div name = "time_row" className='grid border-r border-gray-300 grid-rows-27'>
                                    <div><br/></div>
                                    <div className='row-span-2'>08:00</div>
                                    <div className='row-span-2'>09:00</div>
                                    <div className='row-span-2'>10:00</div>
                                    <div className='row-span-2'>11:00</div>
                                    <div className='row-span-2'>12:00</div>
                                    <div className='row-span-2'>13:00</div>
                                    <div className='row-span-2'>14:00</div>
                                    <div className='row-span-2'>15:00</div>
                                    <div className='row-span-2'>16:00</div>
                                    <div className='row-span-2'>17:00</div>
                                    <div className='row-span-2'>18:00</div>
                                    <div className='row-span-2'>19:00</div>
                                </div>
                                <div name = "sun_rev" className='grid grid-rows-23'>
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                </div>
                                <div name = "mon_rev" className='grid grid-rows-27'></div>
                                <div name = "tue_rev" className='grid grid-rows-27'></div>
                                <div name = "wed_rev" className='grid grid-rows-27'></div>
                                <div name = "thu_rev" className='grid grid-rows-27'></div>
                                <div name = "fri_rev" className='grid grid-rows-27'></div>
                                <div name = "sat_rev" className='grid grid-rows-27'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}