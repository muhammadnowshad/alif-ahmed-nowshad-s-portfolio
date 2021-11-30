import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {

    const {img1, title, short_des, id} = props.project || {};

    return (
            <div className="col-lg-4 col-md-6 col-12 ">
                <div className="card my-card h-100">
                    <div className=''>
                        <img src={img1} className='project-img card-img-top img-fluid' alt="" />
                    </div>
                    <div className="card-body">
                        <h3>{title}</h3>
                        <p className="text-start ">{short_des}</p>
                    </div>
                    <div className="card-footer pt-0 mb-2 border-0">
                        <Link to={`/detailProject/${id}`}>
                            <button className="myBtn w-50">Details</button>
                        </Link>
                    </div> 
                </div>
        </div>         
    );
};

export default Project;