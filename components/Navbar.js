import Link from 'next/link'
import Image from 'next/image'

import SubNavbar from './SubNavbar'
import { useState } from 'react';

import Logo from "../public/uptempo-log-wh.png"

export default function Navbar(props) {
    const [active, setActive] = useState(false);
    const [imgsvg, setImgsvg] = useState(
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
    );
    const [effect, setEffect] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    const handleImgsvg = () => {
        if (!active) {
            setImgsvg(
                <svg
                    className={`w-6 h-6 ${effect && 'animate-wiggle_rev'}`}
                    onAnimationEnd={() => {
                        setEffect(false);
                    }}
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
            )
        }
        else {
            setImgsvg(
                <Image
                    src='/multiply.png'
                    className={effect && 'animate-wiggle_rev'}
                    onAnimationEnd={() => {
                        setEffect(false);
                    }}
                    width={25}
                    height={25}
                />
            )
        }
    }
    
    return (
        <>
            <nav className='relative flex items-center flex-wrap bg-[#2b3d51] z-40'>
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
                <button className={`inline-flex p-3 rounded lg:hidden text-white ml-auto outline-none ${effect && 'animate-wiggle'}`}
                    onClick={() => {
                        handleClick();
                        setEffect(true);
                    }}
                    onAnimationEnd={() => {
                        handleImgsvg();
                    }}
                >
                    {imgsvg}

                </button>
            </nav>
            <SubNavbar currentPage={props.currentPage} active={active}/>
            {
                active && <button className='fixed cursor-auto top-0 w-full h-full backdrop-blur-sm bg-[#2b3d51]/50 z-10'
                                onClick={() => {
                                    handleClick();
                                    setEffect(true);
                                }}
                            /> 
            }
        </>
    )
}