import React from "react";

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Prime Video
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Movies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                TV Shows
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;