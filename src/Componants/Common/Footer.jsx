import React from 'react';
import '../../Styles/footer.css';
import Logo from '../../Assets/Images/Logo.png';

const Footer = () => {
    return (
        <>
            <div className="Footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <img src={Logo} alt="Logo" />
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Your Account</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">FAQS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Store Locator</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 col-12 ft-4">
                            <h5>Quick Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Help & Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Share Feedback</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6 col-lg-2 col-12 ft-3'>
                            <h5>Contact Us</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +91 21324083</p>
                            <p><i className="fa-solid fa-envelope"></i> Techcart@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> New Delhi, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <div className='container text-white'>
                    <div className='row'>
                        <div className="col-md-4 text-left">
                            <p>&copy;{new Date().getFullYear()} TechCart. All Rights Reserved</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <p>TERM & CONDITIONS</p>
                        </div>
                        <div className="col-md-4 text-right">
                            <p>PRIVACY POLICY</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
