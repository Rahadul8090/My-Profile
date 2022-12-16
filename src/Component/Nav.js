import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcMenu, FcNext } from "react-icons/fc";
import logo from '../img/output-onlinegiftools (1).gif'


const Nav = () => {
    let [open, setopen] = useState(false)
    return (
        <div>
            <nav className="flex items-center justify-between pt-5">
                <button
                    className="md:hidden  fixed right-5 cursor-pointer z-20 top-6 w-10 h-10"
                    onClick={() => setopen(!open)}>
                    {
                        open ?
                            <FcNext className="w-10 h-10"></FcNext>
                            :
                            <FcMenu className="w-10 h-10"></FcMenu>
                    }

                </button>
                <div className='flex'>
                    <img src={logo} alt="logo" className="w-20 ml-7" />
                    <p className='mt-5 text-blue-700 font-bold text-xl'>My Information</p>
                </div>
                <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>

                    <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                        <Link to='/home' className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                            Home </Link>
                    </li>
                    <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                        <Link to='/upcom' className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">
                            UpComming</Link>
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