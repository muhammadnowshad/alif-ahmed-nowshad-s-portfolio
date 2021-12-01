import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog pt-5 text-center'>
            <h2>Blog is coming soon <Spinner animation="grow" size="sm"/><Spinner animation="grow" size="sm"/><Spinner animation="grow" size="sm"/><Spinner animation="grow" size="sm" /></h2>
        </div>
    );
};

export default Blog;