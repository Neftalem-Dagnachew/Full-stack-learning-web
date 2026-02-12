import { Outlet } from "react-router-dom";
import EditProfileMeanu from "../components/EditProfileMeanu";

import "../page/DashboardPages/style/FunctionalEditProfile.css"

function EditProfileLayout() {
    return(
        <>
            <div className="d-flex">
                <EditProfileMeanu />
                <div className="edit_form_layout">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default EditProfileLayout;