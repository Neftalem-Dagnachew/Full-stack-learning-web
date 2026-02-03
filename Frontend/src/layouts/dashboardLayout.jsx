import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";

function dashboardLayout() {

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default dashboardLayout;