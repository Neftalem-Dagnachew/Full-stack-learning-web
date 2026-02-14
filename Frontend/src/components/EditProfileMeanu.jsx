import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import "../page/DashboardPages/style/FunctionalEditProfile.css"

function EditProfileMeanu() {

    const { user } = useContext(AuthContext);

    return(
        <>
        <div className="all_container">
            <div className="edit_profile_manu_container mt-4">
                    <h1 className="m-0">Edit Profile</h1>
                    <NavLink className="goTo_profile_btn" to={`/my-dashboard/members/${user.nickname}`}>
                        <i class="fa-solid fa-user pe-4"></i>
                        View Profile
                    </NavLink>
                </div>
                <div className="mt-5 edit_profile_manu_container">
                    <NavLink to={`/my-dashboard/members/${user.nickname}/profile/edit`} end className={({ isActive }) => `edit_profile_manuBtn d-flex justify-content-start align-items-center ps-4 ${isActive ? "active" : ""}`}>
                        <i className="fa-regular fa-pen-to-square pe-4"></i>
                        Edit
                    </NavLink>
                    <NavLink to={`/my-dashboard/members/${user.nickname}/profile/edit/change-cover-image`} end className={({ isActive }) => `edit_profile_manuBtn d-flex justify-content-start align-items-center ps-4 ${isActive ? "active" : ""}`}>
                        <i class="fa-regular fa-camera pe-4"></i>
                        Delate Pictures
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default EditProfileMeanu;