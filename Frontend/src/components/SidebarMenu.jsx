import "./style/SidebarMenu.css"

function SidebarMenu() {
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
                    <button className="menu_btn"> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button className="menu_btn">
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <div className="pt-3">
                        <p className="m-0 poppins-extralight heder_text">Get Started</p>
                        <button className="menu_btn"> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button className="menu_btn"> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>
                    </div>

                </div>

                <div className="sidebar_links_containers">
                    <p className=" poppins-extralight heder_text">Get Started</p>
                    <p className="m-0 poppins-extralight heder_text">Get Started</p>
                    <button className="menu_btn"> 
                        <i class="fa-brands fa-windows btn_icons pe-4"></i>
                        My Dashboard
                    </button>

                    <button className="menu_btn"> 
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