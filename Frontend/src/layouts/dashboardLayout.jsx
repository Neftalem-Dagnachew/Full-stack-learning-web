import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function dashboardLayout() {

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default dashboardLayout;