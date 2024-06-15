import React, { useState } from 'react';
import Mirchii from '../../Assets/Images/mirchi111.png';
import Sambar from '../../Assets/Images/sambar.png';
import '../../Styles/Vegetables_Fruits.css';

const items = [
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Mirchii, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" },
  { img: Sambar, title: "Everest Tikhalal Red Chilli Powder", text: "Powdered Spices", price: "Rs.62" }
];

const Vegetables_Fruits = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => handleClick(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 p-2">
            <h2>Vegetables Fruits -</h2>
          </div>
          <div className="col-12 col-md-6 p-2">
            <select name="" id="" className='form-control w-25 float-end mt-1'>
              <option value="">Sort By</option>
              <option value="">Latest</option>
              <option value="">Trending</option>
            </select>
          </div>
          <hr />
          {currentItems.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
              <div className="card w-100 border-0 shadow text-center position-relative">
                <div className="new-icon">New</div>
                <img src={item.img} className="card-img-top" style={{ height: "200px" }} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <b>{item.price}</b>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className='btn btn-success me-3'>
                    <i className="fa-regular fa-heart fs-4"></i>
                  </button>
                  <div className="btn btn-success ms-3">
                    <i className="fa-solid fa-cart-shopping fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {renderPagination()}
      </div>
    </>
  );
};

export default Vegetables_Fruits;
