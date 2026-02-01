
import "../page/style/Introdaction.css"
import SecondIntro from "./secondIntro";

// img herobaner
import videoImg from "../assets/IntroIMG/videoImg.png"
import studentImg from "../assets/IntroIMG/student.png";
import STU2 from "../assets/IntroIMG/STU2.png";

function Introduction() {

    return(
        <>
            <div className="body_container d-flex justify-content-center gap-5">

            <div className="rightside_content_container ">

                <div className="main_rightside_content">

                    <div className="rightside_text_content">

                        <div className="heder_text_content">

                            <p className="m-0 poppins-semibold text_heder">Start your learning journey today.</p>

                        </div>

                        <div className="heder_text_content">

                            <h2 className="m-0 poppins-extrabold rightside_h2">For those who are candidates for the ministry!</h2>

                        </div>

                        <div className="pb-5">

                            <p className="m-0 poppins-light-italic">
                                Prepare for the exam by joining Saqaman! If you study math 
                                and general science with us, no one will be able to beat you!
                            </p>

                        </div>

                        <div className="rightside_button_containers d-flex gap-5">

                            <div>

                                <button className="rightside_courses_btn">See all courses</button>

                            </div>

                            <div>

                                <button className="rightside_register_btn">Register for free</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="">

                <div className="slider_img_container mb-4">

                    <div className="slider" id="slider">

                        <img src={STU2} className="slide" id="lastClone" />
                        <img src="IMG/Rectangle 13.png" className="slide" />
                        <img src="IMG/STU2.png" className="slide" />
                        <img src="IMG/student.png" className="slide" />
                        <img src="IMG/Rectangle 13.png" className="slide" id="firstClone" />

                    </div>

                </div>

                <div className="under_content_container">

                    <div className="under_text_container">

                        <div className="ourgoal_text">

                            <p className="poppins-semibold fs-5">Our goal is to entertain you!</p>

                        </div>

                        <div className="ourgoal_text">

                            <p className="poppins-extralight sec_goal_text">We have prepared science and math lessons in the new curriculum!</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="last_side_container d-flex justify-content-center align-items-center">

                <div className="position-relative">

                    <img src={videoImg} alt="" />

                    <div className="position-absolute top-50 start-50 translate-middle">
                        <a href=""><button className="last_sidebtn"><i className="fa-solid fa-play"></i></button></a>
                    </div>

                </div>

            </div>

        </div>
        <SecondIntro/>
        </>
    )
}

export default Introduction;