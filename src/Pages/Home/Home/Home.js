import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../../Images/My pic 2.png'
import Contact from '../../Contact/Contact';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='top-banner'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div className='text-white text-start mt-5 pt-5'>
                        <p className='fs-3 mb-0 pb-0'>Hi, I'm Alif Ahmed Nowshad</p>
                        <h1 className=''>Front-End Web Developer</h1>
                        <button className='myBtn me-3'>Hire Me</button>
                        <Link to='resume'>
                         <button className='myBtn'>Resume</button>
                        </Link>
                    </div>
                    <div className='mt-5 pt-5'>
                        <img src={myPic} className='myPic' alt="" />
                    </div>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;