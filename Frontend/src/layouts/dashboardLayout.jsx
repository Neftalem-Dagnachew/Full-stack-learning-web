import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";

function dashboardLayout() {

    return(
        <>
            <div className="dashboard_layout">
                {/* <SidebarMenu /> */}
                <div className="dashboard_content">
                    <Navbar variant="dashboard"/>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default dashboardLayout;