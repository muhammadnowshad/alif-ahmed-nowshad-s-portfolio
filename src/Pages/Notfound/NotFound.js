import React from 'react';
import notFound from '../../Images/404-1.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className=''>
            <img className='img-fluid w-100 not-img' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;