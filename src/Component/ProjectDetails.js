import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const id = useParams()
    const [datas, setData] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:3001/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(datas)
    return (
        <div>
            <h1>Project Details Page</h1>
        </div>
    );
};

export default ProjectDetails;