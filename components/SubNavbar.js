import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react';

import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"

export default function Navbar(props) {
    const navbarContent = [
        {id:1, content:'Control', imageIcon:ControlIcon, route:'/control'},
        {id:2, content:'Device', imageIcon:DevicelIcon, route:'/device'},
        {id:3, content:'Setting', imageIcon:DevicelIcon, route:'/setting'}
    ]
    const changeClick = () => {
        props.changeState();
    };

    const div = []

    for(let i=0;i<navbarContent.length;i++) {
        let menuContent = navbarContent[i]

        div.push(
            <div>
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
            <nav class>
                <section className={props.active ? `flex flex-col items-start transition duration-500 ease-in-out origin-top w-full absolute opacity-95 bg-[#f08583] z-10` : 'flex flex-col items-start scale-y-0 absolute w-full lg:scale-y-100 lg:relative lg:flex lg:flex-row transition duration-200 ease-in-out origin-top bg-[#f08583]'}>
                    
                    {div}
                </section>
            </nav>
            <div className='absolute w-full h-full bg-[#2b3d51] opacity-50 z-1'>asd</div>
        </>
    )
}