import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import dummyData from "../pages/dummy/regDataDummy";
//import Link from 'next/link'
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import RevModal from "../components/RevModal";
import RevTable from "../components/RevTable";
// import { ko } from 'date-fns/esm/locale'
import ssrBasecode from "../lib/ssrBasecode";
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session';

export default function Reservation() {
  let currentPage = 3;
  const [data, setData] = useState(dummyData.regData); // 임시 데이터
  const [now, setNow] = useState(new Date());
  const [deviceName, setDeviceName] = useState("Galaxy S22");
  const [weekSchedule, setWeekSchedule] = useState();
  const [weekString, setWeekString] = useState();

  const handleNewWeekdays = () => {
    let newWeekDays = [];
    let now_day = now.getDay();
    let start_date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - now_day
    );
    for (var i = 0; i < 7; i++) {
      var temp = new Date(
        start_date.getFullYear(),
        start_date.getMonth(),
        start_date.getDate() + i
      );
      newWeekDays[i] = temp;
    }
    return newWeekDays;
  };

  const [weekDays, setWeekDays] = useState(handleNewWeekdays);

  const selectDate = (n) => {
    setNow(n);
  };

  const handleIncreaseWeek = async () => {
    let newDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7
    );
    await setNow(newDate);
  };

  const handleDecreaseWeek = async () => {
    let newDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7
    );
    await setNow(newDate);
  };

  const handleSelectDate = async (n) => {
    await setNow(n);
  };

  const getNewWeekBorads = async () => {
    //let newData = axios.get('/,,,,,,,');
    let weekString = [];
    for (var i = 0; i < 7; i++) {
      weekString[i] = "";
      weekString[i] = weekString[i]
        .concat(weekDays[i].getFullYear())
        .concat("/");
      weekString[i] =
        weekDays[i].getMonth() + 1 <= 9
          ? weekString[i]
              .concat("0")
              .concat(weekDays[i].getMonth() + 1)
              .concat("/")
          : weekString[i].concat(weekDays[i].getMonth() + 1).concat("/");
      weekString[i] =
        weekDays[i].getDate() <= 9
          ? weekString[i].concat("0").concat(weekDays[i].getDate())
          : weekString[i].concat(weekDays[i].getDate());
    }

    await setWeekString(weekString);

    //실제로는 날짜에 맞는 데이터만 요청하여 적용
    //예약 디비 구축 후 다시 작성 필요.
    let newWeekSchedule = new Map();
    for (var i = 0; i < 7; i++) {
      newWeekSchedule.set(weekString[i], []);
    }

    var d = 0;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < weekString.length; j++) {
        if (data[i].date === weekString[j]) {
          newWeekSchedule.set(weekString[j], data[i].blockno);
          break;
        }
      }
    }
    await setWeekSchedule(newWeekSchedule);
  };

  useEffect(() => {
    if (weekDays === undefined) setWeekDays(handleNewWeekdays);
    if (weekSchedule === undefined) getNewWeekBorads();
  }, []);

  useEffect(() => {
    var flag = false;
    for (var i = 0; i < 7; i++) {
      if (now === weekDays[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) setWeekDays(handleNewWeekdays);
  }, [now]);

  useEffect(() => {
    getNewWeekBorads();
  }, [weekDays]);

  const CustomButton = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded h-12 text-2xl mx-4"
    >
      {value.split("/")[2]}년 {value.split("/")[0]}월 {value.split("/")[1]}일
    </button>
  );

  const timeInfoArr = [
    {
      no: 0,
      timeInfo: "08:00 ~ 08:30",
    },
    {
      no: 1,
      timeInfo: "08:30 ~ 09:00",
    },
    {
      no: 2,
      timeInfo: "09:00 ~ 09:30",
    },
    {
      no: 3,
      timeInfo: "09:30 ~ 10:00",
    },
    {
      no: 4,
      timeInfo: "10:00 ~ 10:30",
    },
    {
      no: 5,
      timeInfo: "10:30 ~ 11:00",
    },
    {
      no: 6,
      timeInfo: "11:00 ~ 11:30",
    },
    {
      no: 7,
      timeInfo: "11:30 ~ 12:00",
    },
    {
      no: 8,
      timeInfo: "12:00 ~ 12:30",
    },
    {
      no: 9,
      timeInfo: "12:30 ~ 13:00",
    },
    {
      no: 10,
      timeInfo: "13:00 ~ 13:30",
    },
    {
      no: 11,
      timeInfo: "13:30 ~ 14:00",
    },
    {
      no: 12,
      timeInfo: "14:00 ~ 14:30",
    },
    {
      no: 13,
      timeInfo: "14:30 ~ 15:00",
    },
    {
      no: 14,
      timeInfo: "15:00 ~ 15:30",
    },
    {
      no: 15,
      timeInfo: "15:30 ~ 16:00",
    },
    {
      no: 16,
      timeInfo: "16:00 ~ 16:30",
    },
    {
      no: 17,
      timeInfo: "16:30 ~ 17:00",
    },
    {
      no: 18,
      timeInfo: "17:00 ~ 17:30",
    },
    {
      no: 19,
      timeInfo: "17:30 ~ 18:00",
    },
    {
      no: 20,
      timeInfo: "18:00 ~ 18:30",
    },
    {
      no: 21,
      timeInfo: "18:30 ~ 19:00",
    },
    {
      no: 22,
      timeInfo: "19:00 ~ 19:30",
    },
    {
      no: 23,
      timeInfo: "19:30 ~ 20:00",
    },
  ];

  return (
    <Layout>
      <Navbar currentPage={currentPage} />
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div name="nameBar" className="py-2">
            <p className="text-2xl pl-2 pb-4" name="deviceName">
              {deviceName} 예약 신청 / 현황
            </p>
            <hr className="border border-black" />
          </div>
          <div
            name="time_board"
            className="border-2 border-gray-200 rounded-lg my-4 shadow-2xl"
          >
            <div
              name="board_head"
              className="grid grid-cols-3 py-3 content-center place-items-center"
            >
              <div />
              <div className="flex items-center">
                <button
                  type="button"
                  className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm text-center inline-flex items-center px-3 py-2"
                  onClick={handleDecreaseWeek}
                >
                  ←
                </button>
                <DatePicker
                  selected={now}
                  onChange={(n) => handleSelectDate(n)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  minDate={new Date()}
                  // locale={ko}
                  dropdownMode="select"
                  customInput={<CustomButton />}
                />
                <button
                  type="button"
                  className="text-gray-700 border border-gray-300 hover:bg-gray-700 hover:text-white font-medium rounded-full text-sm text-center inline-flex items-center px-3 py-2"
                  onClick={handleIncreaseWeek}
                >
                  →
                </button>
              </div>
              {weekSchedule !== undefined ? (
                <RevModal
                  deviceName={deviceName}
                  now={now}
                  timeInfoArr={timeInfoArr}
                  selectDate={selectDate}
                  blocks={weekSchedule.get(weekString[now.getDay()])}
                ></RevModal>
              ) : null}
            </div>
            <hr className="border-t border-gray-300" />
            <div
              name="board"
              className="container place-content-center font-bold"
            >
              <div>
                <div
                  name="dd"
                  className="grid grid-cols-8 text-center text-2xl mx-5 py-2"
                >
                  <div />
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 text-red-700 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[0]);
                      }}
                    > {
                      now.getDay() === 0 ? (<p className="font-bold">{weekDays[0].getDate()}</p>) : <p>{weekDays[0].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl text-red-700">일</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[1]);
                      }}
                    >
                      {
                      now.getDay() === 1 ? (<p className="font-bold">{weekDays[1].getDate()}</p>) : <p>{weekDays[1].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl">월</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[2]);
                      }}
                    >
                      {
                      now.getDay() === 2 ? (<p className="font-bold">{weekDays[2].getDate()}</p>) : <p>{weekDays[2].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl">화</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[3]);
                      }}
                    >
                      {
                      now.getDay() === 3 ? (<p className="font-bold">{weekDays[3].getDate()}</p>) : <p>{weekDays[3].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl">수</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[4]);
                      }}
                    >
                      {
                      now.getDay() === 4 ? (<p className="font-bold">{weekDays[4].getDate()}</p>) : <p>{weekDays[4].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl">목</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[5]);
                      }}
                    >
                      {
                      now.getDay() === 5 ? (<p className="font-bold">{weekDays[5].getDate()}</p>) : <p>{weekDays[5].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-xl">금</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="hover:underline hover:underline-offset-2 text-blue-700 px-2"
                      onClick={() => {
                        handleSelectDate(weekDays[6]);
                      }}
                    >
                      {
                      now.getDay() === 6 ? (<p className="font-bold">{weekDays[6].getDate()}</p>) : <p>{weekDays[6].getDate()}</p> 
                    } 
                    </button>
                    <p className="text-blue-700 text-xl">토</p>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-300" />
              <div className="grid grid-cols-8 text-center mx-5">
                <div
                  name="time_row"
                  className="grid border-r border-gray-300 mx-6 text-xl"
                >
                  <div className="place-self-center">08:00</div>
                  <div className="place-self-center">09:00</div>
                  <div className="place-self-center">10:00</div>
                  <div className="place-self-center">11:00</div>
                  <div className="place-self-center">12:00</div>
                  <div className="place-self-center">13:00</div>
                  <div className="place-self-center">14:00</div>
                  <div className="place-self-center">15:00</div>
                  <div className="place-self-center">16:00</div>
                  <div className="place-self-center">17:00</div>
                  <div className="place-self-center">18:00</div>
                  <div className="place-self-center">19:00</div>
                  <div className="place-self-center">20:00</div>
                </div>
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="sun_rev"
                    blockArr={weekSchedule.get(weekString[0])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="mon_rev"
                    blockArr={weekSchedule.get(weekString[1])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="tue_rev"
                    blockArr={weekSchedule.get(weekString[2])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="wen_rev"
                    blockArr={weekSchedule.get(weekString[3])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="thr_rev"
                    blockArr={weekSchedule.get(weekString[4])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="fri_rev"
                    blockArr={weekSchedule.get(weekString[5])}
                  ></RevTable>
                ) : null}
                {weekSchedule !== undefined ? (
                  <RevTable
                    name="sat_rev"
                    blockArr={weekSchedule.get(weekString[6])}
                  ></RevTable>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
  return ssrBasecode(req, res);
},
sessionOptions)