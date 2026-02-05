import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../page/style/Dashboard.css"

import proile from "../assets/Navbar-img/profile.png"

function Dashboard() {
    const { user } = useContext(AuthContext);

    return(
        <>
            <div>
                <div className="d-flex align-items-center">
                    <div className="header_img_container d-flex justify-content-center align-items-center">
                        <img className="profile_img" src={proile}  />
                    </div>
                    <div className="ps-4">
                        <h1 className="poppins-regular"><span className="poppins-bold">Welcome,</span> {user.first_name}</h1>
                        <p className="m-0 poppins-light subheder">to your Member Dashboard</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;