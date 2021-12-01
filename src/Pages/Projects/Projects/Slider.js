import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Slider.css'

const Slider = () => {

    const {projectId} = useParams();
    const [project, setProject] = useState([]);

    useEffect( () => {
        const url = `https://hidden-headland-31246.herokuapp.com/projects/${projectId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [projectId]);

    return (
        <div className='my-4 col-12 col-md-8 mx-auto slider'>
            {
                <div id="carouselExampleDark" className="carousel  carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={project.img1} className="d-block w-100 slider-img" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={project.img2}className="d-block w-100 slider-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={project.img3} className="d-block w-100 slider-img" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            }
        </div>
    );
};

export default Slider;