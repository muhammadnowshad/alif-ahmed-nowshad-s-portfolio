import React from 'react';
import { Link } from 'react-router-dom';
import tourbd from '../../../Images/TouBd.png'
import BuyBicycles from '../../../Images/BuyBicycles.png'
import Medphio from '../../../Images/Medphio.png'
import education from '../../../Images/E-education.png'

const Project = () => {
    return (
        <div>
            <div className='container my-5'>
                <h2 className="mt-5">My Projects</h2>
                <div className="d-flex row my-3 g-4">

                    <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="card my-card h-100  bg-light">
                            <div className=''>
                                <img src={tourbd} className=' service-img border card-img-top img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Travel Agency</h3>
                                <p className="text-start">It is a travel agency website. Firebase Authentication, User Dashboard added and also responsive design. React Js, MongoDB, Express, Node Js, Firebase technologies are used.
                                </p>
                            </div>
                            <div className="card-footer pt-0 mb-2 bg-light border-0">
                                <Link to='/projects'>
                                    <button className="myBtn w-50">Details</button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="card my-card h-100  bg-light">
                            <div className=''>
                                <img src={BuyBicycles} className=' service-img border card-img-top img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Buy Bicycles</h3>
                                <p className="text-start">User-friendly responsive website with Bootstrap Authentication system, User Dashboard, Admin Plane, etc included. React Js, MongoDB, Express, Node Js, Firebase technologies are used.
                                </p>
                            </div>
                            <div className="card-footer pt-0 mb-2 bg-light border-0">
                                <Link to='/projects'>
                                    <button className="myBtn w-50">Details</button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="card my-card h-100  bg-light">
                            <div className=''>
                                <img src={Medphio} className=' service-img border card-img-top img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Health Care</h3>
                                <p className="text-start">Healthcare services website. React Js, MongoDB, Express, Node Js were used to make this website. It’s mobile-friendly and also included Authentication system.
                                </p>
                            </div>
                            <div className="card-footer pt-0 mb-2 bg-light border-0">
                                <Link to='/projects'>
                                    <button className="myBtn w-50">Details</button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="card my-card h-100  bg-light">
                            <div className=''>
                                <img src={education} className='border card-img-top img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <h3>Online Education</h3>
                                <p className="text-start">It is a online education website. Firebase Authentication, User Dashboard added and also responsive design. React Js, MongoDB, Express, Node Js, Firebase technologies are used
                                </p>
                            </div>
                            <div className="card-footer pt-0 mb-2 bg-light border-0">
                                <Link to='/projects'>
                                    <button className="myBtn w-50">Details</button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;