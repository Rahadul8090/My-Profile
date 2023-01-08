import React from 'react';
// import bannerImg from '../img/71619-coding.gif'
import bannerImg2 from '../img/Blue Modern Fire Logo Vector Template.gif'
import { Typewriter } from 'react-simple-typewriter'
import AbaoutMe from './AbaoutMe';


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
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='text-center w-full h-full mt-32'>
                    <h1 className='text-3xl font-bold'>
                        Hello ! I'M {' '}
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
                        I'M{' '}
                        <span className='text-green-700'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Font end Devolepar', 'MEAN Stack', 'React Decoletar ']}
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
                    data-aos-duration="500">
                    <img className='lg:ml-16 w-96' src={bannerImg2} />
                </div>
            </div>
            <div>
                <AbaoutMe></AbaoutMe>
            </div>
        </div>
    );
};

export default Home;