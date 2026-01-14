import "./style/auth.css"
import { Link } from "react-router-dom";

import Logo from "../assets/Navbar-img/Main-Logo.png"

function Login() {

    return(
        <>

            <div className="d-flex">

                <div className="login_img_container">

                    <div>

                        <img className="position-fixed" src="IMG/auth.png" alt="" />
                        
                    </div>

                </div>

                <div className="all_login_container">

                    <div className="all_login_form_container">

                        <div className="pb-5">

                            <Link to="/"><img src={Logo} alt="" /></Link>

                        </div>

                        <form className="loginForm" id="loginForm">

                            <div className="d-flex auth_both_text pb-5">

                                <div>
                                    <h4 className="poppins-semibold text-light m-0">Sign-in</h4>
                                </div>

                                <div>
                                    <p className="poppins-extralight text-light m-0">Create an Account</p>
                                </div>

                            </div>

                            <div className="input-wrapper">

                                <i className="fa-regular fa-user"></i>
                                <input type="email" name="email" placeholder="Email Address" required />

                            </div>

                            <div className="input-wrapper">

                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="password" placeholder="Password" required />

                            </div>

                            <div className="d-flex forgetpassword_text pb-3">

                                <div className="remember-me">

                                    <label>
                                        <input className="checkbox" type="checkbox" />
                                        <span className="checkmark poppins-extralight text-light">Remember Me</span>
                                    </label>

                                </div>

                                <div>

                                    <p className="poppins-extralight text-light m-0">Forget password?</p>

                                </div>

                            </div>

                            <div className="pb-3">

                                <button className="login_btn" type="submit">Log in</button>

                                <div className="d-flex align-items-center">
                                <hr className="w-50 text-light" /><p className="m-0 text-white-50 ps-2 pe-2 poppins-extralight">OR</p><hr className="w-50 text-light" />
                                </div>

                            </div>

                            <div className="d-flex justify-content-center">

                                <p className="text-light poppins-extralight">Terms of Service and Privacy Policy</p>

                            </div>

                        </form>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Login;