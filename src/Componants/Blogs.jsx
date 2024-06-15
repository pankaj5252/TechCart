import React from 'react';
import '../../src/Styles/blogs.css';
import blogs1 from '../Assets/Images/blog1.jpg';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <section id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="mb-4">
                            <h2 className="fw-bold">Blogs</h2>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis laborum.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow border-0">
                            <div className="position-relative overflow-hidden">
                                <div className="position-absolute top-0 start-0 bg-success text-white px-3 py-2">04 FEB</div>
                                <Link to="/">
                                    <img src={blogs1} className="card-img-top blog-img" alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/" className="text-decoration-none text-success">
                                        Lorem 50% ipsum dolor sit amet.
                                    </Link>
                                </h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0">
                                <Link to="/" className="btn btn-outline-success">
                                    Read More
                                    <i className="ms-2 fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow border-0">
                            <div className="position-relative overflow-hidden">
                                <div className="position-absolute top-0 start-0 bg-success text-white px-3 py-2">04 FEB</div>
                                <Link to="/">
                                    <img src={blogs1} className="card-img-top blog-img" alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/" className="text-decoration-none text-success">
                                        Lorem 10% ipsum dolor sit amet.
                                    </Link>
                                </h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0">
                                <Link to="/" className="btn btn-outline-success">
                                    Read More
                                    <i className="ms-2 fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow border-0">
                            <div className="position-relative overflow-hidden">
                                <div className="position-absolute top-0 start-0 bg-success text-white px-3 py-2">04 FEB</div>
                                <Link to="/">
                                    <img src={blogs1} className="card-img-top blog-img" alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to="/" className="text-decoration-none text-success">
                                        Lorem 30% ipsum dolor sit amet.
                                    </Link>
                                </h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                            </div>
                            <div className="card-footer bg-transparent border-top-0">
                                <Link to="/" className="btn btn-outline-success">
                                    Read More
                                    <i className="ms-2 fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
