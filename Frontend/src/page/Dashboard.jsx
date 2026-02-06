import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../page/style/Dashboard.css"

// img
import proile from "../assets/Navbar-img/profile.png"
import races from "../assets/DashboardIMG/ReasIcon.png"

const SERVER_URL = "http://localhost:5000";

function Dashboard() {
    const { user } = useContext(AuthContext);

    return(
        <>
            <div className="All_container">
                <div className="d-flex align-items-center">
                    <div className="header_img_container d-flex justify-content-center align-items-center">
                        {user.profile_image ? (
                            <img className="profile_img" src={`${SERVER_URL}${user.profile_image}`} />
                            
                        ) : (
                            <div>
                                <img className="profile_img" src={proile}  />
                            </div>
                        )}
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
                            <p className="m-o text-center poppins-semibold fs-5">Rases</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard;