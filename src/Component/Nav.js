import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu, FcNext } from "react-icons/fc";
import logo from '../img/Rahad.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { Typewriter } from 'react-simple-typewriter';



AOS.init();

const handleType = (count) => {
    // access word count number
    // console.log(count)
}


const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

const Nav = () => {
     const [open, setopen] = useState(false)
    return (
        <div>
            <nav className="flex items-center justify-between pt-5">
                <button
                    className="md:hidden   right-5 cursor-pointer z-20 top-6 w-10 h-10"
                    onClick={() => setopen(!open)}>
                    {
                        open ?
                            <FcNext className="w-10 h-10"></FcNext>
                            :
                            <FcMenu className="w-10 h-10"></FcMenu>
                    }

                </button>
                <div data-aos="fade-down-right" className='flex'>
                    <img src={logo} alt="logo" className="w-16 rounded-full ml-7 " />
                    <h1 className='text-3xl font-bold mt-3'> 
                        {' '}
                        <span className='text-black'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['My Information',]}
                                loop={100}
                                cursor
                                cursorStyle='🤨'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                </div>
                <ul className={`bg-gray-600 backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? ' left-[-100%] ' : ' left-0'}`}>

                    <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                        <Link to='/home' className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                            Home </Link>
                    </li>
                    <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                        <Link to='/upcom' className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                             ConTack Us</Link>
                    </li>
                    <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                        <Link to='/brand' className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                            Brand</Link>
                    </li>
                </ul>
            </nav >
        </div >
    )
};

export default Nav;