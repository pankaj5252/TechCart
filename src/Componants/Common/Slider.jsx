import React from 'react';
import '../../Styles/slider.css'
import slider1 from '../../Assets/Images/slider1.jpg';
import slider2 from '../../Assets/Images/slider2.jpg';
import slider3 from '../../Assets/Images/slider3.jpg';

const Slider = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ height: '600px' }}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider1} className="d-block w-100 slider_img" alt="..." />
                  <div className="carousel-caption">
                    <h1>Fresh Tomatoes</h1>
                    <h2>Natural Farm Products</h2>
                    <p>
                      Natural organic tomatoes make your health stronger. Put your information here
                    </p>
                    <button className='btn btn-success'>READ MORE</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={slider2} className="d-block w-100 slider_img" alt="..." />
                  <div className="carousel-caption">
                    <h1>Vegetables Big Sale</h1>
                    <h1>Fresh Farm Products</h1>
                    <p>
                      10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!
                    </p>
                    <button className='btn btn-success'>READ MORE</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={slider3} className="d-block w-100 slider_img" alt="..." />
                  <div className="carousel-caption">
                    <h1>Fresh Tomatoes</h1>
                    <h2>Natural Farm Products</h2>
                    <p>
                      Natural organic tomatoes make your health stronger. Put your information here
                    </p>
                    <button className='btn btn-success'>READ MORE</button>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
