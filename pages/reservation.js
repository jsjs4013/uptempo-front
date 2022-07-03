import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import dummyData from "../pages/dummy/regDataDummy"
//import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default function Reservation() {
    let currentPage = 4;
    const [data, setData] = useState(dummyData.regData); // 임시 데이터
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

    const RegTable = () => {
        <div></div>
    }

    const getNewWeekBorads = async () => {
        // 새 데이터를 받아 다시 표로 그리는 함수
        //let newData = axios.get('/,,,,,,,');
        let weekString = [];
        for(var i = 0; i < 7; i++){
            weekString[i] = '';
            weekString[i] = weekString[i].concat(weekDays[i].getFullYear()).concat('/');
            weekString[i] = ((weekDays[i].getMonth() + 1 <= 9) ? weekString[i].concat('0').concat(weekDays[i].getMonth()+1).concat('/') : weekString[i].concat(weekDays[i].getMonth()+1).concat('/'));
            weekString[i] = ((weekDays[i].getDay() <= 9) ? weekString[i].concat('0').concat(weekDays[i].getDay()) : weekString[i].concat(weekDays[i].getDay()));
        }
        
        //실제로는 날짜에 맞는 데이터만 요청하여 적용
        //예약 디비 구축 후 다시 작성 필요.
        let weekSchedule = [];
        console.log(weekString);
        console.log(data);
        
        var i = 0;
        for(var r = 0; r < data.length; r++){
            if(weekString[i] === data[r].date){
                while(weekString[i] === data[r].date){
                    weekSchedule.push(data)
                    r++;
                }
                i++;
            }
            if(i >= 7) break;
        }

        console.log(weekSchedule);
    }

    useEffect(() => {
        if(weekDays === undefined) setWeekDays(handleNewWeekdays);
    }, []);

    useEffect(() => {
        var flag = false;
        for(var i = 0; i < 7; i ++){
            if(now === weekDays[i]){
                flag = true;
                break;
            }
        }
        if(!flag) setWeekDays(handleNewWeekdays);
    }, [now]);

    useEffect(() => {
        getNewWeekBorads();
    }, [weekDays]);

    const CustomButton = ({value, onClick}) => (
        <button onClick={onClick} 
                className='bg-transparent hover:bg-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded h-12 text-2xl mx-4'>
                {value.split('/')[2]}년 {value.split('/')[0]}월 {value.split('/')[1]}일
        </button>
    );

    return(
        <Layout currentPage={currentPage}>
            <section className="bg-white">
                <div className='container px-6 py-8 mx-auto'>
                    <div name="nameBar" className='py-2'>
                        <p className='text-2xl pl-2 pb-4' name='deviceName'>{deviceName} 예약 현황</p>
                        <hr className='border border-black'/>
                    </div>
                    <div name="time_board" className='border border-gray-400 rounded-lg mt-4'>
                        <div name='board_head' className='grid grid-cols-3 py-3 content-center place-items-center'>
                            <div />
                            <div className='flex items-center'>
                            <button type="button" 
                                    className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm text-center inline-flex items-center px-3 py-2"
                                    onClick={handleDecreaseWeek}
                            >
                                ←
                            </button>
                            <DatePicker selected={now} 
                                        onChange={(n) => handleSelectDate(n)}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        customInput={<CustomButton />}
                                />
                            <button type="button" 
                                    className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm text-center inline-flex items-center px-3 py-2"
                                    onClick={handleIncreaseWeek}
                            >
                                →
                            </button>
                            </div>
                            <button className="bg-[#2b3d51] hover:bg-gray-900 text-white font-bold rounded w-32 h-12 max-w-lg min-w-fit" onClick={null}>예약 신청</button>
                        </div>
                        <hr className='border-t border-gray-300' />
                        <div name='board' className='container place-content-center font-bold'>
                            <div>
                                <div name="dd" className='grid grid-cols-8 text-center text-2xl mx-5 py-2'>
                                <div />
                                <div>
                                    <button type="button" 
                                        className="hover:bg-red-500 hover:text-white text-red-700 rounded-full"
                                        onClick={() => { handleSelectDate(weekDays[0])}}>{weekDays[0].getDate()}
                                    </button>
                                        <p className='text-xl text-red-700'>일</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[1])}}>{weekDays[1].getDate()}
                                        </button>
                                        <p className='text-xl'>월</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[2])}}>{weekDays[2].getDate()}
                                        </button>
                                        <p className='text-xl'>화</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[3])}}>{weekDays[3].getDate()}
                                        </button>
                                        <p className='text-xl'>수</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[4])}}>{weekDays[4].getDate()}
                                        </button>
                                        <p className='text-xl'>목</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-900 hover:text-white rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[5])}}>{weekDays[5].getDate()}
                                        </button>
                                        <p className='text-xl'>금</p>
                                    </div>
                                    <div>
                                        <button type="button" 
                                            className="hover:bg-blue-700 hover:text-white text-blue-700 rounded-full"
                                            onClick={() => { handleSelectDate(weekDays[6])}}>{weekDays[6].getDate()}
                                        </button>
                                        <p className="text-blue-700 text-xl">토</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-t border-gray-300'/>
                            <div className='grid grid-cols-8 text-center mx-5'>
                                <div name = "time_row" className='grid border-r border-gray-300 grid-rows-24 items-end mx-5'>
                                    <div className='row-span-3'>08:00</div>
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
                                    <div className='row-span-2'>20:00</div>
                                    <div><br/></div>
                                </div>
                                <div name = "sun_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "mon_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "tue_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "wed_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "thu_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "fri_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                                <div name = "sat_rev" className='grid grid-rows-21'>
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
                                    <div><br/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}