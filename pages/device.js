import Image from 'next/image'
import Layout from '../components/Layout'
import CategoryModals from '../components/CategoryModals'
import dynamic from 'next/dynamic'
import Router from 'next/router';

import { useEffect, useState } from 'react'
import useUser from '../lib/useUser';
import useDevices from '../lib/useDevices';
import device from './api/device';
import Link from 'next/link';

import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session';

import fetchJson from "../lib/fetchJson";

const company = [{key:0, category:'ALL'} ,{key:1, category:'APPLE'}, {key:2, category:'SAMSUNG'}, {key:3, category:'LG'}, {key:4, category:'etc'}]
const os_list = [{key:0, category:'ALL'}, {key:1, category:'IOS'}, {key:2, category:'ANDROID'}, {key:3, category:'etc'}]

const DynamicDesktop = dynamic( // For no SSR
  () => import('../components/Device_screen').then((mod) => mod.Desktop),
  { ssr: false }
)

const DynamicPhone = dynamic( // For no SSR
    () => import('../components/Device_screen').then((mod) => mod.Phone),
    { ssr: false }
  )

export default function SsrDevice(ssrUser) {
    const { user } = useUser();
    let currentPage = 2
    const { devices } = useDevices(user);
    const [selected, setSelected] = useState([0, 0]);

    function setSelect(selectNum) {
        setSelected(selectNum)
    }

    return (
        <Layout currentPage={currentPage}>
            {}
            <section className="bg-white">
                <div className="container px-6 py-8 mx-auto">
                    <DynamicDesktop>
                        <div name="nameBar" className='py-2'>
                            <p className='text-2xl pl-2 pb-4' name='deviceName'>단말 사용 예약</p>
                            <hr className='border border-black'/>
                        </div>
                    </DynamicDesktop>
                    <div className="lg:flex lg:-mx-2">
                        <DynamicDesktop>
                            <div className="space-y-3 tracking-widest mt-2 lg:w-1/5 lg:px-2 lg:space-y-2">
                                <div className='flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <p className='text-white font-bold mt-2 mb-2'>제조사</p>
                                </div>
                                <div className='flex flex-col items-left ml-7'>
                                    {company.map((company) => (
                                        company.key === selected[0] ?
                                            <a href="#" key={company.key} className="block font-bold text-blue-900 hover:underline">{company.category}</a>
                                        :
                                            <a href="#" key={company.key} className="block font-medium text-gray-500 hover:underline" onClick={event => setSelected([company.key, selected[1]])}>{company.category}</a>
                                    ))}
                                </div>
                                <div className='flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <p className='text-white font-medium mt-2 mb-2'>OS</p>
                                </div>
                                <div className='flex flex-col items-left ml-7'>
                                    {os_list.map((os_list) => (
                                        os_list.key === selected[1] ?
                                            <a href="#" key={os_list.key} className="block font-bold text-blue-900 hover:underline">{os_list.category}</a>
                                        :
                                            <a href="#" key={os_list.key} className="block font-medium text-gray-500 hover:underline" onClick={event => setSelected([selected[0], os_list.key])}>{os_list.category}</a>
                                    ))}
                                </div>
                            </div>
                        </DynamicDesktop>

                        <DynamicPhone>
                            <CategoryModals selected={selected} setSelect={setSelect} />
                        </DynamicPhone>

                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
                            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p className="text-gray-500 dark:text-gray-900">{devices?.length} Items</p>
                                <div className="flex items-center">
                                    <p className="text-gray-500 dark:text-gray-900 px-3">Sort</p>
                                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                                    <select id="underline_select" className="block py-2.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option defaultValue>출시일</option>
                                        <option value="#">제품명</option>
                                        <option value="#">사용가능한 기기</option>
                                        <option value="#">예약가능한 기기</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    devices?.devices.filter((device) => device.present).map((device) => (
                                        <div key={device.serial} className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                            <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                                <Image
                                                    src='/Galaxy/samsung-galaxy-a73-5g.jpeg'
                                                    className='object-cover w-full rounded-md h-72 xl:h-80'
                                                    height={200}
                                                    width={150}
                                                />
                                            </div>
                                            <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">{device.marketName}</h4>
                                            <p className="text-blue-900">{device.manufacturer}</p>

                                            {!device.using &&
                                                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                    onClick={ async (event) => {
                                                        const success = deviceContHandler("POST", device.serial).sucess;
                                                        console.log(success);
                                                        success ?
                                                            Router.push('/control')
                                                        :
                                                            event.preventDefault()
                                                    }
                                                }>
                                                    <a className="mx-1">사용하기</a>
                                                </button>
                                            }
                                            {device.using &&
                                                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-800 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-700"
                                                    onClick={ async () => {
                                                        deviceContHandler("DELETE", device.serial)
                                                    }
                                                }>
                                                    <a className="mx-1">사용중지</a>
                                                </button>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
  )
}

async function deviceContHandler(method, deviceSerial) {
    await fetchJson(
        '/api/deviceCont', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            serial: deviceSerial,
            method: method
        }),
        credentials: 'include',
    });
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, }) {
    const user = req.session.xsrf;
    
    if (!user?.isLoggedIn) {
      res.setHeader('location', '/')
      res.statusCode = 302
      res.end()
      return {
        props: {
            user: {
                success: true,
                isLoggedIn: false,
            }
        },
      }
    }
  
    return {
      props: { user: req.session.xsrf },
    }
  },
  sessionOptions)