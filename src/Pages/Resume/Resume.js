import React from 'react';
import pdf from '../../Images/Alif Ahmed Resume2.pdf'

const Resume = () => {
    return (
        <div className='container my-5'>
            <h2 className='my-3'>My Resume</h2>
            <img src={pdf} alt="" />
            <embed src={pdf} className='w-75' height='800' type='application/pdf'></embed>
        </div>
    );
};

export default Resume;