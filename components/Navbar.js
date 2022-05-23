import Link from 'next/link'
import Image from 'next/image'

import SubNavbar from './SubNavbar'
import { ReactElement, useState } from 'react';

import Logo from "../public/uptempo-log-wh.png"
import ControlIcon from "../public/icons8-touchscreen-30.png"
import DevicelIcon from "../public/icons8-smartphones-30.png"
import { passThroughSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';

export default function Navbar(props) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        {console.log('asdadasd')}
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-[#2b3d51]'>
                <div>
                    <Link href='/'>
                        <a className='inline-flex items-center ml-4'>
                            <Image
                                src={Logo}
                                width='140'
                                height='50'
                            />
                        </a>
                    </Link>
                </div>
                <button className='inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}>
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
            <SubNavbar currentPage={props.currentPage} active={active} changeState={handleClick}/>
        </>
    )
}