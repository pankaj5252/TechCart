import React from 'react';
import '../../Styles/latestProducts.css';
import mirchi from '../../Assets/Images/mirchi111.png'
import sambar from '../../Assets/Images/sambar.png'

const LatestProducts = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row text-center text-md-start">
                        <h1 className="mb-2 mb-md-0">Latest Products</h1>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item product-category">All</li>
                            <li className="list-inline-item product-category">Category 2</li>
                            <li className="list-inline-item product-category">Category 3</li>
                            <li className="list-inline-item product-category">Category 4</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card border-0 text-center">
                        <img src={mirchi} className="card-img-top category_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Everest Tikhalal Red Chilli Powder</h5>
                            <p className="card-text">Powdered Spices</p>
                            <b>Rs.62</b>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card border-0 text-center">
                        <img src={sambar} className="card-img-top category_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Everest Tikhalal Red Chilli Powder</h5>
                            <p className="card-text">Powdered Spices</p>
                            <b>Rs.62</b>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card border-0 text-center">
                        <img src={mirchi} className="card-img-top category_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Everest Tikhalal Red Chilli Powder</h5>
                            <p className="card-text">Powdered Spices</p>
                            <b>Rs.62</b>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-4">
                    <div className="card border-0 text-center">
                        <img src={sambar} className="card-img-top category_img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Everest Tikhalal Red Chilli Powder</h5>
                            <p className="card-text">Powdered Spices</p>
                            <b>Rs.62</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;
