import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import myPic from '../../Images/My pic3.jpg'
import './About.css'

const About = () => {
    return (
        
            <div className='container my-5'>
                <h2 className='mb-5'>About me</h2>
                <div className='row g-4'>
                    <div className='d-flex flex-column align-items-start align-items-sm-center col-12 col-md-6'>
                        <div className=''>
                            <img src={myPic} className='img-fluid my-img' alt="" />
                        </div>
                        <div>
                        <p className='fs-5 text-start mt-2'>My name is Alif Ahmed Nowshad. I'm a Frontend Web Developer. I always try to the best into my work.</p>
                        <p className='fs-5 text-start mt-2'>Designing and Coding is my first passion that's why I always like to do creative projects. I enjoy creating beautifully designed, creative and functional websites.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 text-start'>
                        <h5>My Skills:</h5>
                        <p>HTML5
                        <ProgressBar style={{height: '5px'}} now={90} /></p>
                        <p>CSS3
                        <ProgressBar style={{height: '5px'}} now={85} /></p>
                        <p>Javascript
                        <ProgressBar style={{height: '5px'}} now={70} /></p>
                        <br/>
                        <h5>Framework:</h5>
                        <p>Bootstrap5
                        <ProgressBar style={{height: '5px'}} now={90} /></p>
                        <p>React Js
                        <ProgressBar style={{height: '5px'}} now={75} /></p>
                        <p>React Bootstrap
                        <ProgressBar style={{height: '5px'}} now={60} /></p>
                        <p>Tailwind CSS
                        <ProgressBar style={{height: '5px'}} now={50} /></p>
                        <p>Material UI
                        <ProgressBar style={{height: '5px'}} now={50} /></p>
                        <br/>
                        <h5>Back End Technology:</h5>
                        <p>Firebase
                        <ProgressBar style={{height: '5px'}} now={70} /></p>
                        <p>Node Js
                        <ProgressBar style={{height: '5px'}} now={50} /></p>
                        <p>Express Js
                        <ProgressBar style={{height: '5px'}} now={50} /></p>
                    </div>
                </div>
            </div>
        
    );
};

export default About;