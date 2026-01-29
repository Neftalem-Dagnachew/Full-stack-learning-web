import "./style/auth.css"
import Logo from "../assets/Navbar-img/Main-Logo.png"
import { Link } from "react-router-dom";
import auth from "../assets/authIMG/auth.png"

// 
import { registerUsers } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    return(
        <>
            <div className="d-flex">

            <div className="login_img_container">

                <div>

                    <img className="position-fixed" src={auth} alt="" />
                    
                </div>

            </div>

            <div className="all_register_container">

                <div className="register_form_container">

                    <div className="pb-5">

                        <Link to="/"><img src={Logo} alt="" /></Link>

                    </div>

                    <form className="RegisterForm" id="registerForm">

                        <div className="d-flex rigister_creat_text pb-5">

                            <div>
                                <h4 className="poppins-semibold text-light m-0">Create an Account</h4>
                            </div>

                            <div>
                                <p className="poppins-extralight text-light m-0">Sign-in</p>
                            </div>

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Email</p>
                            <input type="email" name="email" required />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Password</p>
                            <input type="password" name="password" required />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">First Name</p>
                            <input type="text" name="first_name" required />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Last Name</p>
                            <input type="text" name="last_name" required />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Nickname</p>
                            <input type="text" name="nickname" />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Phone Number</p>
                            <input type="text" name="phone_numer" required />

                        </div>

                        <div className="input-rigister">

                            <p className="poppins-semibold text-light m-0 input_text">Identity</p>
                            <select className="identity_section" id="identity" name="identity">
                                <option value="">----</option>
                                <option value="student">Student</option>
                                <option value="parent">Parent / Family</option>
                                <option value="teacher">Teacher</option>
                            </select>


                        </div>

                        <div className="input-rigister">

                            <p className="poppins-extralight text-light m-0 input_text">By creating an account you are agreeing to the Terms of Service and Privacy Policy.</p>

                        </div>

                        <div className="input-rigister">

                            <button className="login_btn" type="submit">Create an Account</button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
        </>
    )
}

export default Register;