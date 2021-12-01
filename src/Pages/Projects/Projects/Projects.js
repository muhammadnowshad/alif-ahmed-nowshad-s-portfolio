import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('https://hidden-headland-31246.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <div>
            <div className='container my-5'>
                <h2 className="mt-5">My Projects</h2>
                <div className="row my-3 g-4">
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
                </div>
            </div>
        </div>
    );
};

export default Projects