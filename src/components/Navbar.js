import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light">
      <div className="container my-2">
        <Link to="/" className="navbar-brand me-auto brandname">
          Sathish Byagari
        </Link>
        <Link to="/contact">
          <button className="btn btn-outline-info ml-auto mx-3">
            Contact me
          </button>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Update data-toggle to data-bs-toggle for Bootstrap 5
          data-bs-target="#collapseNav" // Update data-target to data-bs-target for Bootstrap 5
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <Link
              to="/add-education"
              className="nav-item nav-link text-dark h4 mx-1 my-3"
            >
              Add-Degree
            </Link>
            <Link
              to="/allprojects"
              className="nav-item nav-link text-dark h4 mx-1 my-3"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
