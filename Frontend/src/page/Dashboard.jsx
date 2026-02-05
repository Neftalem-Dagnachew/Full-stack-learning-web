import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../page/style/Dashboard.css"

import proile from "../assets/Navbar-img/profile.png"

function Dashboard() {
    const { user } = useContext(AuthContext);

    return(
        <>
            <div>
                <div className="d-flex">
                    <div className="header_img_container d-flex justify-content-center align-items-center">
                        <img className="profile_img" src={proile}  />
                    </div>
                    <p className="mt-5">Welcome, {user.first_name}</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;