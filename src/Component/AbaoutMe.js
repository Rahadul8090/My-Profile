import React from 'react';
import subgectImg from '../img/316942988_603418061555709_2355095695321211973_n.jpg'
import MyProjects from './MyProjects';


const AbaoutMe = () => {
    return (
        <div>
            <div data-aos="zoom-out-down" className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <p className='text-center text-2xl bg-white text-black'>About Me</p>
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src={subgectImg} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Rahadul Islam</h4>
                        <p className="dark:text-gray-400">I am a front-end developer but I also can do the backend with MongoDB and express.js.
                            Although my interest is front-end development. Skilled in HTML, CSS, JavaScript, React Js, Bootstrap, Tailwind CSS, MongoDB, and express.js. Excels at creating pixel-perfect
                            designs and working with cross-browser compatibility issues. An enthusiastic developer
                            to learn and thrive in a collaborative team environment. Through this I want to
                            strengthen my skills</p>
                    </div>
                </div>
            </div>
            <MyProjects></MyProjects>
        </div>
    );
};

export default AbaoutMe;