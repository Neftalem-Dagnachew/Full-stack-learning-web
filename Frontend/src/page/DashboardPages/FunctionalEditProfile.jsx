import "../DashboardPages/style/FunctionalEditProfile.css"

import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function FunctionalEditProfile() {

    const { user } = useContext(AuthContext);
    // const [isActive, setIsActive] = useState(false);

    return(
        <>
            <div className="all_container">
                <div className="mt-4 edit_profile_manu_container">
                    <h1 className="m-0">Edit Profile</h1>
                    <NavLink className="goTo_profile_btn" to={`/my-dashboard/members/${user.nickname}`}>
                        <i class="fa-solid fa-user pe-4"></i>
                        View Profile
                    </NavLink>
                </div>
                <div className="d-flex">
                <div className="mt-5 edit_profile_manu_container">
                    <NavLink to={`/my-dashboard/members/${user.nickname}/profile/edit`} end className={({ isActive }) => `edit_profile_manuBtn d-flex justify-content-start align-items-center ps-4 ${isActive ? "active" : ""}`}>
                        <i className="fa-regular fa-pen-to-square pe-4"></i>
                        Edit
                    </NavLink>
                    <NavLink to={`/my-dashboard/members/${user.nickname}`} end className={({ isActive }) => `edit_profile_manuBtn d-flex justify-content-start align-items-center ps-4 ${isActive ? "active" : ""}`}>
                        <i class="fa-regular fa-address-book pe-4"></i>
                        Profile Photo
                    </NavLink>
                    <NavLink to={`/my-dashboard/members/${user.nickname}`} end className={({ isActive }) => `edit_profile_manuBtn d-flex justify-content-start align-items-center ps-4 ${isActive ? "active" : ""}`}>
                        <i class="fa-regular fa-camera pe-4"></i>
                        Cover Photo
                    </NavLink>
                </div>
                <div className="edit-container">
                    <h2>Edit "Details" Information</h2>

                    {/* First Name */}
                    <div className="form-group">
                        <label>First name (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="form-group">
                        <label>Last name (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Nickname */}
                    <div className="form-group">
                        <label>Nickname (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label>Phone number (required)</label>
                        <input
                        type="text"
                        />
                    </div>
                    <button className="change_btn">Change</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default FunctionalEditProfile;