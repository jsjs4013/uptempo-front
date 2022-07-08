import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react';

import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"

export default function Navbar(props) {
    const navbarContent = [
        {id:1, content:'Control', imageIcon:ControlIcon, route:'/control'},
        {id:2, content:'Device', imageIcon:DevicelIcon, route:'/device'},
        {id:3, content:'Setting', imageIcon:DevicelIcon, route:'/setting'},
        {id:4, content:'Reservation', imageIcon:DevicelIcon, route:'/reservation'}
    ]

    const div = []

    for(let i=0;i<navbarContent.length;i++) {
        let menuContent = navbarContent[i]

        div.push(
            <div key={menuContent.id}>
                <Link href={menuContent.route}>
                    <a className='group flex w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center'>
                        <Image
                            src={menuContent.imageIcon}
                            className={props.currentPage === menuContent.id ? "rotate-6" : "group-hover:rotate-6"}
                            width={23}
                            height={23}
                        />
                        <span className= {`${props.currentPage === menuContent.id ? 'text-[#2b3d51]' : 'group-hover:text-[#2b3d51]'} text-sm`}>
                            {menuContent.content}
                        </span>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <>
            <nav className='sticky top-0 z-30'>
                <section className={props.active ? `scale-y-0 lg:scale-y-100 flex flex-row items-start lg:relative w-full absolute opacity-95 bg-[#f08583]` : 'flex flex-row items-start scale-y-0 absolute w-full lg:scale-y-100 lg:relative transition duration-500 ease-in-out origin-top bg-[#f08583]'}>
                    
                    {div}
                    <div className='inline-flex p-2 ml-auto'>
                        <Image
                            src='/ktds_main.png'
                            width={48}
                            height={20}
                        />
                    </div>
                </section>

                {/* 반응형 서브 네비게이션바 */}
                <section className={props.active ? `lg:hidden flex flex-col items-start transition duration-500 ease-in-out origin-top w-full absolute opacity-95 bg-[#f08583]` : 'flex flex-col items-start scale-y-0 absolute w-full transition duration-200 ease-in-out origin-top bg-[#f08583]'}>
                    
                    {div}
                    <div className='inline-flex p-2 ml-auto'>
                        <Image
                            src='/ktds_main.png'
                            width={48}
                            height={20}
                        />
                    </div>
                </section>
            </nav>
        </>
    )
}