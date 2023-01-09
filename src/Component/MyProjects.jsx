import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Contack from './Contack';
 
const MyProjects = () => {
    const [datas, setData] = useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/projec')
        .then(res => res.json())
        .then(project => setData(project))
     },[])
    console.log(datas)
    return (
        <div className='m-4'>
            <h1 data-aos="zoom-out-right" className='text-center font-extrabold text-black text-2xl m-5 bg-indigo-700 p-5'>My Some Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'> 
                {
                    datas.map(data =>
                        <div data-aos="zoom-out-left" className="card  h-72 bg-base-100 shadow-xl image-full">
                    <figure><img className='' src={data.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                         <div className="card-actions justify-end">
                            <Link to={data._id} className='btn btn-secondary'> Vieo Details</Link>
                            <a href={data.projectLINK} target='_blank' className="btn btn-primary">Watch Now</a>
                         </div>
                    </div>
                </div>
                )}
                 
            </div>
            <Contack></Contack>
        </div>
    );
};

export default MyProjects;