import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import dynamic from 'next/dynamic'


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
                            <div className="space-y-3 tracking-widest mt-2 lg:w-1/5 lg:px-2 lg:space-y-2">
                                <button className='flex w-36 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-gray-600'>
                                    <p className='text-white font-bold mt-2 mb-2'>제조사</p>
                                </button>
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

                            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                                Toggle modal
                            </button>

                            <div id="defaultModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                    
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        
                                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                Terms of Service
                                            </h3>
                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                            </button>
                                        </div>
                                        
                                        <div className="p-6 space-y-6">
                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                            </p>
                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                            </p>
                                        </div>
                                        
                                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                            <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                            <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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