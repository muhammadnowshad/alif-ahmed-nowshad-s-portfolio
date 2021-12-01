import React from 'react';
import myPic from '../../Images/My pic3.jpg'

const About = () => {
    return (
        <div className='container d-flex align-items-center my-5'>
            <div>
                <p className='fs-5 text-start'>My name is Alif Ahmed Nowshad. I'm a junior Frontend Web Developer. I'm learning MERN Development. <br />
                My Skills: <br />
                1. HTML <br />
                2. CSS <br />
                3. Javascript <br />

                Framework: <br />
                1. Bootstrap <br />
                2. Tailwind CSS  <br />
                3. React Js <br />


                </p>
            </div>
            <div>
                <img src={myPic} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default About;