import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <>
            <div className="bg-dark text-light py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <i className="fa fa-phone me-2"></i>1-888-345-6789
                        <i className="fa fa-envelope ms-3 me-2"></i>contact@example.com
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown me-3">
                            <Link className="text-light dropdown-toggle text-decoration-none" to="#" role="button" id="accountDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                <li><Link className="dropdown-item text-decoration-none" to="/login">Login</Link></li>
                                <li><Link className="dropdown-item text-decoration-none" to="/register">Register</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown me-3">
                            <Link className="text-light dropdown-toggle text-decoration-none" to="#" role="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                                <li><Link className="dropdown-item text-decoration-none" to="#">USD</Link></li>
                                <li><Link className="dropdown-item text-decoration-none" to="#">EUR</Link></li>
                                <li><Link className="dropdown-item text-decoration-none" to="#">GBP</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <Link className="text-light dropdown-toggle text-decoration-none" to="#" role="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                <li><Link className="dropdown-item text-decoration-none" to="#">English</Link></li>
                                <li><Link className="dropdown-item text-decoration-none" to="#">Spanish</Link></li>
                                <li><Link className="dropdown-item text-decoration-none" to="#">French</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
