import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../page/style/Dashboard.css"

// img
import proile from "../assets/Navbar-img/profile.png"
import races from "../assets/DashboardIMG/ReasIcon.png"

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
                        <h1 className="poppins-regular"><span className="poppins-semibold">Welcome,</span> {user.first_name}</h1>
                        <p className="m-0 poppins-regular subheder">to your Member Dashboard</p>
                    </div>
                </div>

                <div className="races_position">
                    <div className="races_container d-flex align-items-center justify-content-center">
                        <div>
                            <img className="races_img mb-2" src={races}/>
                            <p className="m-o text-center">Rases</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;