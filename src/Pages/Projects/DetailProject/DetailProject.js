import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Slider from '../Projects/Slider';

const DetailProject = () => {

    const {projectId} = useParams();
    const [project, setProject] = useState([]);

    useEffect( () => {
        const url = `https://hidden-headland-31246.herokuapp.com/projects/${projectId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProject(data))
    }, []);

    
    return (
        <div className='my-5'>
            <h2>{project.title}</h2>
            <Slider></Slider>
            <div className='max-auto'>
                <a target='_blank' rel="noreferrer" className=' me-3 fs-4 fw-bold' href={project.liveLink}>Live Site</a>
                <a target='_blank' rel="noreferrer" className=' fs-4 fw-bold me-3' href={project.codeClient}>Client Code</a>
                <a target='_blank' rel="noreferrer" className=' fs-4 fw-bold' href={project.codeServer}>Server Code</a>
            </div>
            <div className='mx-auto col-12 col-md-8 my-2'>
                <p className='text-start'>{project.short_des}</p>
                <p className='text-start'>{project.long_des}</p>
            </div>
        </div>
    );
};

export default DetailProject;