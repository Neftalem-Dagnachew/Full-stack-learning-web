
import { useState } from "react";
import "../components/style/Navbar.css"
import logo from "../assets//Navbar-img/Main-Logo.png"
import ethioFlag from "../assets/Navbar-img/ethio_flag.svg"

function Navbar() {
  return (
    <>
      <nav className="main_nav d-flex align-items-center">

        <div className="nav_links_container d-flex align-items-center gap-4">

          <div className="main_logo">
            <img
              className="main_logo"
              src={logo}
              alt="Main Logo"
            />
          </div>

          <div className="d-flex align-items-center">
            <ul className="nav_lists d-flex m-0 p-0">
              <li className="poppins-light">Introduction</li>
              <li className="poppins-light ps-4">About saqema</li>
              <li className="poppins-light ps-4">Educational standards</li>
              <li className="poppins-light ps-4">Types of education</li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <img
              className="nav_translator_img ps-2"
              src={ethioFlag}
              alt="Amharic"
            />
            <p className="m-0 ps-2 translator_text poppins-light">AN</p>

            <img
              className="nav_translator_img ps-2"
              src={ethioFlag}
              alt="English"
            />
            <p className="m-0 ps-2 translator_text poppins-light">EN</p>
          </div>

        </div>

        <div className="d-flex align-items-center side_nav_container gap-3">
          <i className="fa-solid fa-cart-arrow-down side_cart"></i>

          <a className="link-tag" href="/login">
            <p className="m-0 sidbar_nav_sign_in poppins-light">sign-in</p>
          </a>

          <div className="d-flex">
            <button className="side_nav_login poppins-light">
              <a className="link-tag" href="/register">sign-up</a>
            </button>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
