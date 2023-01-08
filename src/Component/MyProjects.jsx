import React from 'react';
import img1 from '../img/webImg/Screenshot_20230108_104510.png'
import img2 from '../img/webImg/Screenshot_20230108_104642.png'
import img3 from '../img/webImg/Screenshot_20230108_105017.png'
import img4 from '../img/webImg/Screenshot_20230108_105107.png'
import img5 from '../img/webImg/Screenshot_20230108_112924.png'
import img6 from '../img/webImg/Screenshot_20230108_113103.png'
import img7 from '../img/webImg/Screenshot_20230108_113254.png'
 
const MyProjects = () => {
    return (
        <div className='mt-4'>
            <h1 data-aos="zoom-out-right" className='text-center bg-white text-black text-2xl'>All Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'> 
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img className='' src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img src={img7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fashion Designing</h2>
                         <div className="card-actions justify-end">
                            <a href='https://grand-nougat-89734b.netlify.app/' className="btn btn-primary">Watch Now</a>
                            <a href='#' className="btn btn-primary">Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;