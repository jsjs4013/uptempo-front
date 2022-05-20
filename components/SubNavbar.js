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
    const div = []

    for(let i=0;i<navbarContent.length;i++) {
        let menuContent = navbarContent[i]

        div.push(
            <div>
                <Link href={menuContent.route}>
                    <a className='group lg:inline-flex lg:w-auto w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center'>
                        <Image
                            src={menuContent.imageIcon}
                            className= {props.currentPage === menuContent.id ? 'rotate-6' : 'group-hover:rotate-6'}
                        />
                        <span className= {props.currentPage === menuContent.id ? 'text-[#2b3d51]' : 'group-hover:text-[#2b3d51]'}>
                            {menuContent.content}
                        </span>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <nav>
            <section className={props.active ? 'w-full lg:inline-flex lg:flex-grow lg:w-auto bg-[#f08583]' : 'hidden lg:flex items-center flex-wrap bg-[#f08583]'}>
                {div}
            </section>
        </nav>
    )
}