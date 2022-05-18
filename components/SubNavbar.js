import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react';

import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"

export default function Navbar() {
    const [menuId, setMenuId] = useState(0);
    const navbarContent = [
        {id:1, content:'Control', imageIcon:ControlIcon},
        {id:2, content:'Device', imageIcon:DevicelIcon},
        {id:3, content:'Setting', imageIcon:DevicelIcon}
    ]
    const menuImage = 'rotate-6'
    const menuText = 'text-[#2b3d51]'
    const div = []

    for(let i=0;i<navbarContent.length;i++) {
        let menuContent = navbarContent[i]
        console.log('Do something after counter has changed2', menuId);

        div.push(
            <div id={menuContent.id}
                onMouseEnter={(event) => {setMenuId(menuContent.id)}}
                onMouseLeave={(event) => {setMenuId(0)}}>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 ml-4 rounded text-white font-bold items-center justify-center'>
                        <Image
                            src={menuContent.imageIcon}
                            className= {menuContent.id === menuId ? menuImage : null}
                        />
                        <span className={menuContent.id === menuId ? menuText : null}>
                            {/* {useEffect(() => {
                                console.log('Do something after counter has changed', menuId);
                                
                                }, [menuId])} */}
                            {/* {console.log('Do something after counter has changed', menuId)} */}
                            {menuContent.content}
                        </span>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <nav className='flex items-center flex-wrap bg-[#f08583]'>
            {div}
        </nav>
    )
}