import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import "../components/style/Navbar.css"
import logo from "../assets//Navbar-img/Main-Logo.png"

// imge
import profileImg from "../assets/Navbar-img/profile.png";
import ethioFlag from "../assets/Navbar-img/ethio_flag.svg";

function Navbar() {

  const { user, logout } = useContext(AuthContext);

  const [openMenu, setOpenMenu] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);


  const menuRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false), setButtonActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="main_nav d-flex align-items-center">

        <div className="nav_links_container d-flex align-items-center gap-4">

          <div className="main_logo">
            <Link to="/">
              <img
                className="main_logo"
                src={logo}
                alt="Main Logo"
              />
            </Link>
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

        {!user && (
          <div className="d-flex align-items-center side_nav_container gap-3">
            <i className="fa-solid fa-cart-arrow-down side_cart"></i>

            <Link className="link-tag" to="/login">
              <p className="m-0 sidbar_nav_sign_in poppins-light">sign-in</p>
            </Link>

            <div className="d-flex">
              <button className="side_nav_login poppins-light">
                <Link className="link-tag" to="/register">sign-up</Link>
              </button>
            </div>
          </div>
        )}

        {user && (
          <>
            <div className="d-flex gap-3 align-items-center">
              <i className="fa-solid fa-cart-arrow-down side_cart"></i>

              <div className="profile_container" ref={menuRef}>

                <div className={`profile_btn gap-2 d-flex align-items-center justify-content-center ${buttonActive ? "active" : ""}`} onClick={() => {
                  setOpenMenu(prev => !prev)
                  setButtonActive(prev => !prev)
                }}>

                  <p className="m-0 fw-bold">{user.first_name}</p>

                  <img className="btn_profileImg" src={profileImg} alt="" />

                </div>

                {openMenu && (
                  <div className="profile_manu">
                    <Link className="profile_links" to="/dashboard">
                      <span className="d-flex align-items-center">
                        <img className="btn_profileImg" src={profileImg}/>
                        <div className="ps-3">
                          <p className="m-0 fw-bold">{user.first_name}</p>
                          <p className="m-0 text-muted">{user.nickname}</p>
                        </div>
                      </span>
                    </Link>
                    <Link className="profile_links" to="/settings">Settings</Link>
                    <button className="profile_links" onClick={logout}>Logout</button>
                  </div>
                )}

              </div>

            </div>
          </>
        )}

      </nav>
    </>
  );
}

export default Navbar;
