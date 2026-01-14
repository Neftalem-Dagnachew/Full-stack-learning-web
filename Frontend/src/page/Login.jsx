import "./style/Login.css"
import { Link } from "react-router-dom";

import Logo from "../assets/Navbar-img/Main-Logo.png"

function Login() {

    return(
        <>

            <div class="d-flex">

                <div class="login_img_container">

                    <div>

                        <img class="position-fixed" src="IMG/auth.png" alt="" />
                        
                    </div>

                </div>

                <div class="all_login_container">

                    <div class="all_login_form_container">

                        <div class="pb-5">

                            <Link to="/"><img src={Logo} alt="" /></Link>

                        </div>

                        <form class="loginForm" id="loginForm">

                            <div class="d-flex auth_both_text pb-5">

                                <div>
                                    <h4 class="poppins-semibold text-light m-0">Sign-in</h4>
                                </div>

                                <div>
                                    <p class="poppins-extralight text-light m-0">Create an Account</p>
                                </div>

                            </div>

                            <div class="input-wrapper">

                                <i class="fa-regular fa-user"></i>
                                <input type="email" name="email" placeholder="Email Address" required />

                            </div>

                            <div class="input-wrapper">

                                <i class="fa-solid fa-lock"></i>
                                <input type="password" name="password" placeholder="Password" required />

                            </div>

                            <div class="d-flex forgetpassword_text pb-3">

                                <div class="remember-me">

                                    <label>
                                        <input class="checkbox" type="checkbox" />
                                        <span class="checkmark poppins-extralight text-light">Remember Me</span>
                                    </label>

                                </div>

                                <div>

                                    <p class="poppins-extralight text-light m-0">Forget password?</p>

                                </div>

                            </div>

                            <div class="pb-3">

                                <button class="login_btn" type="submit">Log in</button>

                                <div class="d-flex align-items-center">
                                <hr class="w-50 text-light" /><p class="m-0 text-white-50 ps-2 pe-2 poppins-extralight">OR</p><hr class="w-50 text-light" />
                                </div>

                            </div>

                            <div class="d-flex justify-content-center">

                                <p class="text-light poppins-extralight">Terms of Service and Privacy Policy</p>

                            </div>

                        </form>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Login;