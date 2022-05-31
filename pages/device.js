import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import CategoryChoose from '../components/CategoryChoose'
import dynamic from 'next/dynamic'

import { Dialog, Transition, RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'
import classNames from 'classnames';


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
    const [isOpen, setIsOpen] = useState(false)
    const [plan, setPlan] = useState('startup')
    const [selected, setSelected] = useState('startup')


    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
    setIsOpen(true)
    }
    
    return (
        <Layout>
            <Navbar currentPage={currentPage} />
            <section className="bg-white">
                <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <DynamicDesktop>
                            <div className="space-y-3 tracking-widest mt-2 lg:w-1/5 lg:px-2 lg:space-y-2">
                                <div className='flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <p className='text-white font-bold mt-2 mb-2'>제조사</p>
                                </div>
                                <div className='flex flex-col items-left ml-7'>
                                    <a href="#" className="block font-bold text-blue-900 hover:underline">ALL</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">APPLE</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">SAMSUNG</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">LG</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">etc</a>
                                </div>
                                <div className='flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <p className='text-white font-medium mt-2 mb-2'>OS</p>
                                </div>
                                <div className='flex flex-col items-left ml-7'>
                                    <a href="#" className="block font-bold text-blue-900 hover:underline">ALL</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">APPLE</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">ANDROID</a>
                                    <a href="#" className="block font-medium text-gray-500 hover:underline">IOS</a>
                                    <a href="#" className="block font-bold text-gray-500 hover:underline">etc</a>
                                </div>
                            </div>
                        </DynamicDesktop>

                        <DynamicPhone>
                        <div className="flex justify-around tracking-widest">
                                <div className='inline-flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <button
                                        type="button"
                                        onClick={openModal}
                                        className="text-white font-bold mt-2 mb-2 w-full h-full"
                                    >
                                        제조사
                                    </button>
                                </div>
                                
                                <div className='inline-flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <button
                                        type="button"
                                        onClick={openModal}
                                        className="text-white font-bold mt-2 mb-2 w-full h-full"
                                    >
                                        OS
                                    </button>
                                </div>
                            </div>

                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-100"
                                        enterFrom="opacity-30"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-100"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-100"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg font-medium leading-6 text-gray-900"
                                                    >
                                                        제조사
                                                    </Dialog.Title>
                                                    <CategoryChoose />
                                                    <div className="mt-4">
                                                        <button
                                                            type="button"
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                            >
                                                            선택
                                                        </button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
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