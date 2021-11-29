import React from 'react';
import pdf from '../../Images/Alif Ahmed Resume2.pdf'

const Resume = () => {
    return (
        <div className='container'>
            <h1 className='my-3'>My Resume</h1>
            <img src={pdf} alt="" />
            <embed src={pdf} className='w-75' height='1000' type='application/pdf'></embed>
        </div>
    );
};

export default Resume;