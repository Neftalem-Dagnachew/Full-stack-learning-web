import "./style/SidebarMenu.css"

import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SidebarMenu() {

    const [isActive, setIsActive] = useState(false);
    const { user, logout } = useContext(AuthContext);

    return(
        <>
            <div className="all_sidebar">
                <div className="main_sidebar_container">
                    <div className="d-flex align-items-center justify-content-center bar_icon_container">
                        <i className="fa-solid fa-bars bars_icon"></i>
                    </div>
                </div>
                <div className="sidebar_links_containers">
                    <p className="m-0 poppins-extralight heder_text">Get Started</p>
                    <NavLink to="/my-dashboard" end className={({ isActive }) => `menu_btn ps-2 align-items-center ${isActive ? "active" : ""}`}>
                    {/* onClick={() => {
                        setIsActive("dashboard1")
                    }}>  */}
                        <i className="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </NavLink>

                    <NavLink to={`/my-dashboard/members/${user.nickname}`} end id="menu_btn2" className={({ isActive }) =>`menu_btn ps-2 align-items-center ${isActive ? "active" : ""}`}>
                    {/* onClick={() => {
                        setIsActive("dashboard2")
                        }}>  */}
                        <i className="fa-solid fa-user btn_icons pe-4"></i>
                        Profile
                    </NavLink>

                    <div className="pt-3">
                        <p className="m-0 poppins-extralight heder_text">Learn</p>
                        <NavLink to="/my-dashboard/course-dashboard" end id="menu_btn2" className={({ isActive }) => `menu_btn ps-2 align-items-center ${isActive ? "active" : ""}`}>
                            <i className="fa-solid fa-graduation-cap btn_icons pe-4"></i>
                            Races
                        </NavLink>

                        <NavLink to="/my-dashboard/ask-ai" className={`menu_btn ps-2 align-items-center ${isActive === "dashboard4" ? "active" : ""}`} onClick={() => {
                            setIsActive("dashboard4")}}> 
                            <i className="fa-solid fa-crown btn_icons pe-4"></i>
                            Ask AI
                        </NavLink>
                    </div>

                </div>

                <div className="sidebar_links_containers_2">
                    <p className=" poppins-extralight heder_text">Community</p>
                    <p className="m-0 poppins-extralight heder_text">Account</p>
                    <NavLink to="/" id="btn_Setting" className={`menu_btn ps-2 align-items-center ${isActive === "dashboard5" ? "active" : ""}`} onClick={() => {
                        setIsActive("dashboard5")}}> 
                        <i className="fa-solid fa-gear btn_icons pe-4"></i>
                        Settings
                    </NavLink>

                    <NavLink to="/" id="menu_btn_Billing" className={`menu_btn ps-2 align-items-center ${isActive === "dashboard6" ? "active" : ""}`} onClick={() => {
                        setIsActive("dashboard6")}}> 
                        <i className="fa-solid fa-credit-card btn_icons pe-4"></i>
                        Billing
                    </NavLink>

                    <button to="/" className="menu_btn ps-2 align-items-center pe-5 logout_btn" onClick={logout}> 
                        <i className="fa-solid fa-arrow-right-from-bracket btn_icons pe-4"></i>
                        Log Out
                    </button>

                </div>

            </div>
        </>
    )
}

export default SidebarMenu;