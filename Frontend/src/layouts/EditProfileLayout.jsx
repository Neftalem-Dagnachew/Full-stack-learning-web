import { Outlet } from "react-router-dom";
import EditProfileMeanu from "../components/EditProfileMeanu";

import "../page/DashboardPages/style/FunctionalEditProfile.css"

function EditProfileLayout() {
    return(
        <>
            <EditProfileMeanu />
            <Outlet />
        </>
    )
}

export default EditProfileLayout;