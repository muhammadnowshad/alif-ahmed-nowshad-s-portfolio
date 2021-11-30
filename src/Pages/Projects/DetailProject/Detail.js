import React, { useEffect, useState } from 'react';
import Slider from '../Projects/Slider';

const Detail = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('./myData.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <div>
            {
                projects.map(project => <Slider project={project}></Slider>)
            }
        </div>
    );
};

export default Detail;