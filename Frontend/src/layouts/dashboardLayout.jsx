import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";

function DashboardLayout() {
  return (
    <>
      <Navbar variant="dashboard" />

      <SidebarMenu />

      <div className="dashboard_content">
        <Outlet />
      </div>
    </>
  );
}


export default DashboardLayout;
