
import "./style/SecondIntro.css"

function SecondIntro() {

    return(
        <>
            <div className="second_content_container d-flex justify-content-center">

            <div className="all_second_container d-flex justify-content-start">

                <div className="sec_img_container position-relative d-flex">

                   <img className="sec_img" src="IMG/STU2.png" alt="" />

                    {/* <!-- <div className="d-flex align-items-center"> --> */}

                        {/* <!-- <div className="img_card_container"> --> */}
                            
                            <div className="first_card">

                                <div className="d-flex align-items-center gap-3">

                                    <img className="card_img" src="IMG/seq_wine1.png" alt="" />

                                    <div>

                                        <h6 className="poppins-semibold">Interesting online course</h6>
                                        <p className="m-0 poppins-extralight">It's the same as what you learn in school.</p>

                                    </div>

                                </div>

                            </div>

                            <div className="second_card">

                                <div className="d-flex align-items-center gap-3">

                                    <img className="card_img" src="IMG/star_seq.png" alt="" />

                                    <div>

                                        <h6 className="poppins-semibold">Qualified teachers</h6>
                                        <p className="m-0 poppins-extralight">Qualified and experienced teachers.</p>

                                    </div>

                                </div>

                            </div>

                            <div className="third_card">

                                <div className="d-flex align-items-center gap-3">

                                    <img className="card_img" src="IMG/student_seq.png" alt="" />

                                    <div>

                                        <h6 className="poppins-semibold">100,000 students</h6>
                                        <p className="m-0 poppins-extralight">Over 100,000 students are using our YouTube channel.</p>

                                    </div>

                                </div>

                            </div>

                         {/* </div> */}

                     {/* </div> */}

                </div>

                <div className="d-flex align-items-center">

                    <div className="sec_allcontent_container">

                        <div className="sec_all_text_container">

                            <div className="pb-4">

                                <h3 className="sec_main_hade poppins-medium m-0">Study with us!</h3>

                            </div>

                            <div className="pb-4">

                                <h2 className="sec_use_text poppins-bold m-0">Why is Saqima useful?</h2>

                            </div>

                            <div className="pb-5">

                                <p className="m-0 poppins-extralight">Learn visually by watching our videos, understand the lesson by doing questions, and assess your skills by taking tests!</p>

                            </div>

                            <div className="pb-4">

                                <p className="m-0 poppins-light"><i className="fa-solid fa-check chakemark"></i>All Youtube videos together</p>

                            </div>

                            <div className="pb-4">

                                <p className="m-0 poppins-light"><i className="fa-solid fa-check chakemark"></i>In order</p>

                            </div>

                            <div className="pb-4">

                                <p className="m-0 poppins-light"><i className="fa-solid fa-check chakemark"></i>To find out how much study you have left</p>

                            </div>

                            <div className="pb-5">

                                <p className="m-0 poppins-light"><i className="fa-solid fa-check chakemark"></i>If you don't understand, start with the lowest grade and better.</p>

                            </div>

                            <div>

                                <button className="sec_usetext_register_btn">Click here to register.</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default SecondIntro;