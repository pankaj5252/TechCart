// Header.js

import React, { useState } from 'react';
import Logo from '../../Assets/Images/Logo.png';
import { NavLink } from 'react-router-dom';
import '../../Styles/header.css';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleCategoriesHover = () => {
    setIsCategoriesOpen(true);
  };

  const handleCategoriesLeave = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg bg-white p-0">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} className="img-fluid logo" alt="TechCart Logo" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link nav-link-custom" activeclass="active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item dropdown" onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave}>
                <NavLink to="#" className="nav-link nav-link-custom dropdown-toggle" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories
                </NavLink>
                <ul className={`dropdown-menu ${isCategoriesOpen ? 'show' : ''}`} aria-labelledby="categoriesDropdown">
                  <li><NavLink to="/Vegetables_Fruits" className="dropdown-item">Vegetables & Fruits</NavLink></li>
                  <li><NavLink to="/category2" className="dropdown-item">Category 2</NavLink></li>
                  <li><NavLink to="/category3" className="dropdown-item">Category 3</NavLink></li>
                  <li><NavLink to="/category4" className="dropdown-item">Category 4</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link nav-link-custom" activeclass="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link nav-link-custom" activeclass="active">Contact Us</NavLink>
              </li>
            </ul>
            <form className="d-flex me-3 flex-grow-1 flex-md-grow-0 search-form">
              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search products here..."
                aria-label="Search"
              />
              <button className="btn bg-success text-white btn-outline-success" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
            <div className="d-flex icon-button">
              <NavLink to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-shopping-cart"></i>
              </NavLink>
              <NavLink to="/account" className="btn btn-outline-dark">
                <i className="fa fa-user"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
