import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../../Images/My pic 2.png'
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects/Projects';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='top-banner d-flex align-items-center'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-12 col-md-6 text-white text-start my-auto'>
                            <p className='fs-3 mb-0 pb-0'>Hi, I'm Alif Ahmed Nowshad</p>
                            <h1 className=''>Front-End Web Developer</h1>
                            <button className='myBtn me-3'>Hire Me</button>
                            <Link to='resume'>
                            <button className='myBtn'>Resume</button>
                            </Link>
                            <div className='fs-2 mt-2'>
                                <a href="https://www.linkedin.com/in/alif-ahmed-nowshad/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in me-4 icons"></i>
                                </a>
                                <a href="https://github.com/muhammadnowshad" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github icons"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 '>
                            <img src={myPic} className='myPic' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Projects></Projects>
            <div className='about py-1'>
                <About></About>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;