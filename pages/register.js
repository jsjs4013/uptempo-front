import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
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
        let newWeekDays = [];
        let now_day = now.getDay();
        let start_date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now_day);
        for(var i = 0; i < 7; i++){
            var temp = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate() + i);
            newWeekDays[i] = temp;
        }
        console.log(now, newWeekDays)
        return newWeekDays;
    }

    const [weekDays, setWeekDays] = useState(handleNewWeekdays);

    const handleIncreaseWeek = async () => {
        let newDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 7
        );
        await setNow(newDate);  
    }

    const handleDecreaseWeek = async () => {
        let newDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() - 7
        );
        await setNow(newDate);
    }

    const handleSelectDate = async (n) => {
        await setNow(n);
    }

    useEffect(() => {
        console.log('first render');
        if(weekDays === undefined) setWeekDays(handleNewWeekdays);
    }, []);

    useEffect(() => {
        setWeekDays(handleNewWeekdays);
    }, [now])

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
                        <div name='board_head' className='grid grid-cols-3 py-3 content-center place-items-center'>
                            <div>
                                <p className='m-5 text-xl font-medium text-left'>{now.getFullYear()}년 {now.getMonth()+1}월 {now.getDate()}일</p>
                            </div>
                            <div className='flex items-center'>
                            <button type="button" 
                                    className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                                    onClick={handleDecreaseWeek}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <DatePicker className='border border-gray-300 mx-4 text-center'
                                            selected={now} onChange={(n) => handleSelectDate(n)}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                />
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
                                <div name="dd" className='grid grid-cols-9 border-b border-gray-300 text-center text-2xl py-2'>
                                <div />
                                <div>
                                    <button type="button" 
                                        className="hover:bg-red-500 hover:text-white text-red-700 rounded-full p-2"
                                        onClick={() => { handleSelectDate(weekDays[0])}}>{weekDays[0].getDate()}
                                    </button>
                                        <p className='text-xl text-red-700'>일</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[1])}}>{weekDays[1].getDate()}
                                        </button>
                                        <p className='text-xl'>월</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[2])}}>{weekDays[2].getDate()}
                                        </button>
                                        <p className='text-xl'>화</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[3])}}>{weekDays[3].getDate()}
                                        </button>
                                        <p className='text-xl'>수</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[4])}}>{weekDays[4].getDate()}
                                        </button>
                                        <p className='text-xl'>목</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[5])}}>{weekDays[5].getDate()}
                                        </button>
                                        <p className='text-xl'>금</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-700 hover:text-white text-blue-700 rounded-full p-2"
                                            onClick={() => { handleSelectDate(weekDays[6])}}>{weekDays[6].getDate()}
                                        </button>
                                        <p className="text-blue-700 text-xl">토</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-9 text-center mb-4'>
                                <div name = "time_row" className='grid border-r border-gray-300 grid-rows-20 items-end'>
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
                                <div name = "sun_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "mon_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "tue_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "wed_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "thu_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "fri_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div name = "sat_rev" className='grid grid-rows-20'>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                    <div className='border-b border-gray-300'><br/></div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}