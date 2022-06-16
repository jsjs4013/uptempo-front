import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import CategoryChoose from '../components/CategoryChoose'
import CategoryModals from '../components/CategoryModals'
import dynamic from 'next/dynamic'

import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'
import classNames from 'classnames';

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

export default function Device() {
    let currentPage = 2
    const [selected, setSelected] = useState([0, 0])

    function setSelect(selectNum) {
        setSelected(selectNum)
    }
    
    return (
        <Layout>
            <Navbar currentPage={currentPage} />
            <section className="bg-white">
                <div className="container px-6 py-8 mx-auto">
                    <DynamicDesktop>
                        <div name="nameBar" className='py-2'>
                            <p className='text-2xl pl-2 pb-4' name='deviceName'>단말 사용 예약</p>
                            <hr className='border border-black'/>
                        </div>
                    </DynamicDesktop>
                    <div className="lg:flex lg:-mx-2">
                        {console.log('use')}
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
                                <p className="text-gray-500 dark:text-gray-900">5 Items</p>
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
                                <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                    <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                        <Image
                                            src='/Galaxy/samsung-galaxy-a73-5g.jpeg'
                                            className='object-cover w-full rounded-md h-72 xl:h-80'
                                            height={200}
                                            width={150}
                                            alt='Galaxy'
                                        />
                                    </div>
                                    <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">Galaxy A73 5G</h4>
                                    <p className="text-blue-900">SAMSUNG</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <span className="mx-1">예약하기</span>
                                    </button>
                                </div>

                                <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                        <Image
                                            src='/Galaxy/samsung-galaxy-m53-5g.jpeg'
                                            className='object-cover w-full rounded-md h-72 xl:h-80'
                                            height={200}
                                            width={150}
                                            alt='Galaxy'
                                        />
                                    </div>
                                    <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">Galaxy M53 5G</h4>
                                    <p className="text-blue-900">SAMSUNG</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <span className="mx-1">예약하기</span>
                                    </button>
                                </div>

                                <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                        <Image
                                            src='/Galaxy/samsung-galaxy-s20-fe-5g.jpeg'
                                            className='object-cover w-full rounded-md h-72 xl:h-80'
                                            height={200}
                                            width={150}
                                            alt='Galaxy'
                                        />
                                    </div>
                                    <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">Galaxy S20 FE 5G</h4>
                                    <p className="text-blue-900">SAMSUNG</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <span className="mx-1">예약하기</span>
                                    </button>
                                </div>

                                <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                    <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                        <Image
                                            src='/iphone/apple-iphone-13-pro.jpeg'
                                            className='object-cover w-full rounded-md h-72 xl:h-80'
                                            height={200}
                                            width={150}
                                            alt='iPhone'
                                        />
                                    </div>
                                    <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">iPhone 13 PRO</h4>
                                    <p className="text-blue-900">APPLE</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <span className="mx-1">예약하기</span>
                                    </button>
                                </div>
                                
                                <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
                                    <div className='bg-gradient-to-r hover:scale-105 duration-300 ease-in-out drop-shadow-md'>
                                        <Image
                                            src='/iphone/apple-iphone-13-pro.jpeg'
                                            className='object-cover w-full rounded-md h-72 xl:h-80'
                                            height={200}
                                            width={150}
                                            alt='iPhone'
                                        />
                                    </div>
                                    <h4 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-900">iPhone 13 PRO</h4>
                                    <p className="text-blue-900">APPLE</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <span className="mx-1">예약하기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
  )
}