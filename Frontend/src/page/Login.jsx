import "./style/auth.css"
import { Link } from "react-router-dom";

import Logo from "../assets/Navbar-img/Main-Logo.png"
import auth from "../assets/authIMG/auth.png"

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { loginUser } from "../services/api";

function Login() {

    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError();

        loginUser(formData)
         .then(data => {
            setUser(data.user);
            navigate("/dashboard");
         })
         .catch(err => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         })
    }

    return(
        <>

            <div className="d-flex">

                <div className="login_img_container">

                    <div>

                        <img className="position-fixed" src={auth} alt="" />
                        
                    </div>

                </div>

                <div className="all_login_container">

                    <div className="all_login_form_container">

                        <div className="pb-5">

                            <Link to="/"><img src={Logo} alt="" /></Link>

                        </div>

                        <form className="loginForm" id="loginForm" onSubmit={handleSubmit}>

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
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />

                            </div>

                            <div className="input-wrapper">

                                <i className="fa-solid fa-lock"></i>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />

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

                                <button className="login_btn" type="submit" disabled={loading}>{loading ? "Logging in ..." : "login"}</button>
                                {error && <p style={{ color: "red"}}>{error}</p>}

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