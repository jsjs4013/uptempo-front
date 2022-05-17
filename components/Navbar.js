import Link from 'next/link'
import Image from 'next/image'

import { ReactElement, useState } from 'react';

import Logo from "../public/uptempo-log-wh.png"
import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"
import SettinglIcon from "../public/icons8-settings.gif"

export default function Navbar() {
    const [menuImage, setMenuImage] = useState(null);
    const [menuText, setMenuText] = useState(null);

    return (
        <>
            <nav className='flex items-center flex-wrap bg-[#2b3d51]'>
                <Link href='/'>
                    <a className='inline-flex items-center ml-4'>
                        <Image
                            src={Logo}
                            width='160'
                            height='60'
                        />
                    </a>
                </Link>
                <button className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
            </nav>

            <nav className='flex items-center flex-wrap bg-[#f08583]'>
                <div
                    onMouseEnter={() => {setMenuImage('rotate-6'), setMenuText('text-[#2b3d51]')}}
                    onMouseLeave={() => {setMenuImage(null), setMenuText(null)}}>
                    <Link href='/'>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center'>
                            <Image
                                src={ControlIcon}
                                className={menuImage}
                            />
                            <span className={menuText}>
                                Control
                            </span>
                        </a>
                    </Link>
                </div>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center hover:text-[#2b3d51]'>
                        <Image
                            src={DevicelIcon}
                            className={menuImage}
                        />
                        Device
                    </a>
                </Link>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center hover:text-[#2b3d51]'>
                        <Image
                            src={DevicelIcon}
                            className={menuImage}
                        />
                        Setting
                    </a>
                </Link>
            </nav>
        </>
    )
}