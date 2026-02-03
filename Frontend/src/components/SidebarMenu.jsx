import "./style/SidebarMenu.css"

import { useState } from "react";

function SidebarMenu() {
    const [openMenu, setOpenMenu] = useState(null);

    return(
        <>
            <div className="all_sidebar">
                <div className="main_sidebar_container">
                    <div className="d-flex align-items-center justify-content-center bar_icon_container">
                            <i class="fa-solid fa-bars bars_icon"></i>
                    </div>
                </div>
                <div className="sidebar_links_containers">
                    <p className="m-0 poppins-extralight heder_text">Get Started</p>
                    <button className={`menu_btn ${openMenu === "dashboard1" ? "active" : ""}`} onClick={() => {
                        setOpenMenu("dashboard1")}}> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button id="menu_btn2" className={`menu_btn ${openMenu === "dashboard2" ? "active" : ""}`} onClick={() => {
                        setOpenMenu("dashboard2")}}> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        Profile
                    </button>

                    <div className="pt-3">
                        <p className="m-0 poppins-extralight heder_text">Learn</p>
                        <button className={`menu_btn ${openMenu === "dashboard3" ? "active" : ""}`} onClick={() => {
                            setOpenMenu("dashboard3")}}> 
                            <i class="fa-brands fa-windows btn_icons pe-4"></i>
                            My Dashboard
                        </button>

                        <button className={`menu_btn ${openMenu === "dashboard4" ? "active" : ""}`} onClick={() => {
                            setOpenMenu("dashboard4")}}> 
                            <i class="fa-brands fa-windows btn_icons pe-4"></i>
                            My Dashboard
                        </button>
                    </div>

                </div>

                <div className="sidebar_links_containers">
                    <p className=" poppins-extralight heder_text">Get Started</p>
                    <p className="m-0 poppins-extralight heder_text">Get Started</p>
                    <button className={`menu_btn ${openMenu === "dashboard5" ? "active" : ""}`} onClick={() => {
                        setOpenMenu("dashboard5")}}> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button className={`menu_btn ${openMenu === "dashboard6" ? "active" : ""}`} onClick={() => {
                        setOpenMenu("dashboard6")}}> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button className="menu_btn pe-5"> 
                        <i class="fa-solid fa-arrow-right-from-bracket btn_icons pe-4"></i>
                        Log Out
                    </button>

                </div>

            </div>
        </>
    )
}

export default SidebarMenu;