import { Link } from "react-router-dom";
import React from "react";
function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-12 py-3">
          <h2 className="text-light">What to ask something?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-md">Lets talk</button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More links</h5>
            <Link to="/">
              <button className="btn btn-outline-light btn-md">
                Lets Talk
              </button>
            </Link>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <Link to="/contact" className="text-light d-block">
              Contact me
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light justify py-3">
            The content provided in this portfolio is guaranteed to be entirely
            accurate and factual as of February 20, 2024. Every detail has been
            meticulously verified to ensure complete reliability and
            authenticity. Rest assured, you can rely on the information
            presented here with full confidence.
          </div>
          <div className="col-12 col-md-4" py-3>
            <h5 className="text-info pb-3 ">Social</h5>
            <a
              href="https://www.linkedin.com/in/kalyan-papani-44099b1a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a
              href="https://github.com/KalyanPapani64"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a
              href="https://twitter.com/kalyanpapani"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-twitter text-light h1 d-block"></i>
            </a>
            <a
              href="https://www.instagram.com/k_forkalyan?igsh=MWhtajIxdW85dnZrcA%3D%3D&utm_source=qr"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-instagram text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="col-12 text-secondary py-3">
          <p>Copyright © Kalyan Papani 2024</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
