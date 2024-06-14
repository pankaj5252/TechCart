import React from 'react';
import '../../Styles/latestProducts.css'; // Assuming you have this stylesheet

const LatestProducts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="mb-0">Latest Products</h1>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item product-category">All</li>
                                <li className="list-inline-item product-category">Category 2</li>
                                <li className="list-inline-item product-category">Category 3</li>
                                <li className="list-inline-item product-category">Category 4</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card w-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card w-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card w-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card w-100">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestProducts;
