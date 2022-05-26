import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import dummyData from "../pages/dummy/regDataDummy"
//import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendar, faPray } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Register() {
    let currentPage = 7;
    const [data, setData] = useState(dummyData.regData);    
    const [now, setNow] = useState(new Date());
    const [deviceName, setDeviceName] = useState("Galaxy S22");

    const handleNewWeekdays = () => {
        let now_day = now.getDay();
        let start_date = new Date();
        start_date.setDate(now.getDate()-now_day);
        let weekDays = [];
        for(var i = 0; i < 7; i++){
            var temp = new Date();
            temp.setDate(start_date.getDate() + i);
            weekDays.push(temp);
        }
        return weekDays;
    }

    const [weekDays, setWeekDays] = useState(handleNewWeekdays(now));

    const handleIncreaseWeek = () => {
        const promies = new Promise((resolve, reject) => {
            setNow(now.setDate(now.getDate() + 7))
            if(typeof now === "string"|| typeof now !== Date) setNow(new Date(now))
        });
        promies.then(
            setWeekDays(handleNewWeekdays())   
        );
    }

    const handleDecreaseWeek = () => {
        const promies = new Promise((resolve, reject) => {
            setNow(now.setDate(now.getDate() - 7))
            if(typeof now === "string"|| typeof now !== Date) setNow(new Date(now))
        });
        promies.then(
            setWeekDays(handleNewWeekdays())   
        );
    }

    const handleSelectDate = (now) => {
        const promies = new Promise((resolve, reject) => {
            setNow(now);
            if(typeof now === "string"|| typeof now !== Date) setNow(new Date(now))
        })
        promies.then(
            setWeekDays(handleNewWeekdays())
        )
    }

    return(
        <Layout>
            <Navbar/>
            <section className="bg-white">
                <div className='container px-6 py-8 mx-auto'>
                    <div name="nameBar" className='py-2'>
                        <p className='text-2xl pl-2 pb-4' name='deviceName'>{deviceName} 예약 현황</p>
                        <hr className='border border-black'/>
                    </div>
                    <div name="time_board" className='border border-gray-300 rounded-t-lg mt-4'>
                        <div name='board_head' className='grid grid-cols-3 py-3 content-center place-items-center place-content-around'>
                            <div>
                                <DatePicker selected={now} onChange={(now) => handleSelectDate(now)}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                />
                            </div>
                            <div className='flex items-center'>
                            <button type="button" 
                                    className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                                    onClick={handleDecreaseWeek}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <p className='m-5 text-xl font-medium'>{now.getFullYear()}년 {now.getMonth()+1}월 {now.getDate()}일</p>
                            <button type="button" 
                                    className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                                    onClick={handleIncreaseWeek}
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                            </div>
                            <button className="bg-[#2b3d51] hover:bg-gray-900 text-white font-bold rounded w-32 h-12 max-w-lg min-w-fit" onClick={null}>예약 신청</button>
                        </div>
                        <div name='board' className='container place-content-center border-t border-gray-300'>
                            <div>
                                <div name="dd" className='grid grid-cols-8 border-b border-gray-300 text-center text-2xl py-2'>
                                    <div/>
                                    <div onClick={() => { handleSelectDate(weekDays[0]) }}>
                                        <p className="text-red-700">{weekDays[0].getDate()}</p>
                                        <p className="text-red-700 text-xl">일</p>
                                    </div>
                                    <div>
                                        <p>{weekDays[1].getDate()}</p>
                                        <p className='text-xl'>월</p>
                                    </div>
                                    <div>
                                        <p>{weekDays[2].getDate()}</p>
                                        <p className='text-xl'>화</p>
                                    </div>
                                    <div>
                                        <p>{weekDays[3].getDate()}</p>
                                        <p className='text-xl'>수</p>
                                    </div>
                                    <div>
                                        <p>{weekDays[4].getDate()}</p>
                                        <p className='text-xl'>목</p>
                                    </div>
                                    <div>
                                        <p>{weekDays[5].getDate()}</p>
                                        <p className='text-xl'>금</p>
                                    </div>
                                    <div>
                                        <p className="text-blue-700">{weekDays[6].getDate()}</p>
                                        <p className="text-blue-700 text-xl">토</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-8 text-center  text-xl pb-2'>
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