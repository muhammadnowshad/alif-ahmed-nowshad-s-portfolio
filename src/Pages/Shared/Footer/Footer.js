import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid bg-primary py-2 text-center'>
            <div className='fs-2'>
                <a href="https://www.linkedin.com/in/alif-ahmed-nowshad/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin me-4 icons"></i>
                </a>
                <a href="https://github.com/muhammadnowshad" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github-square icons"></i>
                </a>
            </div>
            <p className='text-white'>© 2021 Alif_Ahmed_Nowshad.com All rights reserved.</p>
        </div>
    );
};

export default Footer;