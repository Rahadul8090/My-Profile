import React from 'react';
// import bannerImg from '../img/71619-coding.gif'
import bannerImg2 from '../img/Blue Modern Fire Logo Vector Template.gif'
import { Typewriter } from 'react-simple-typewriter'
import AbaoutMe from './AbaoutMe';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";


const Home = () => {

    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className='w-5/6 m-auto md:w-5/6 '>
            <div className='lg:grid grid-cols-2'>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='text-center w-full h-96 mt-32'>
                    <h1 className='text-3xl font-bold'>
                        Hello ! My Name Is
                        {' '}
                        <span className=' text-blue-700'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Rahadul Islam',]}
                                loop={100}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <div className="divider">and</div>
                    <h1 className='text-4xl font-bold'>
                        I can{' '}
                        <span className='text-green-700'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Font end Devolepment', 'React Devolepment', 'Microsoft Word', 'Microsoft Excel', 'Powerpoint']}
                                loop={100}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <div className='flex justify-center align-middle p-10 '>
                        <button className="btn btn-outline mr-4">Download CV</button>
                        <button className="btn btn-outline">See Resume</button>
                    </div>

                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <img className=' w-96' src={bannerImg2} />
                            <div className='flex justify-center '>
                                <a href='#' className='m-1'> <FaFacebook className='w-9 h-9' /> </a>
                                <a href='#' className='m-1'> <FaTwitter className='w-9 h-9' /> </a>
                                <a href='#' className='m-1'> <RiWhatsappFill className='w-9 h-9' /> </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AbaoutMe></AbaoutMe>
            </div>
        </div>
    );
};

export default Home;