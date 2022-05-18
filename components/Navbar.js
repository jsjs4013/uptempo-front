import Link from 'next/link'
import Image from 'next/image'

import SubNavbar from './SubNavbar'
import { ReactElement, useState } from 'react';

import Logo from "../public/uptempo-log-wh.png"
import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"
import SettinglIcon from "../public/icons8-settings.gif"
import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

export default function Navbar() {
    const [menuId, setMenuId] = useState(-1);
    const [titleImage, setTitleImage] = useState(null);
    const navbarContent = [
        {id:1, content:'Control', imageIcon:ControlIcon},
        {id:2, content:'Device', imageIcon:DevicelIcon},
        {id:3, content:'Setting', imageIcon:DevicelIcon}
    ]

    return (
        <>
            <nav className='flex items-center flex-wrap bg-[#2b3d51]'>
                <div
                    onMouseEnter={() => {setTitleImage('rotate-6')}}
                    onMouseLeave={() => {setTitleImage(null)}}>
                    <Link href='/'>
                        <a className='inline-flex items-center ml-4'>
                            <Image
                                src={Logo}
                                width='210'
                                height='80'
                            />
                        </a>
                    </Link>
                </div>
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
            <SubNavbar />
        </>
    )
}