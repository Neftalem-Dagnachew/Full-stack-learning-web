
import "../CourseDashboardPage/style/CourseStart.css"


import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function CourseStart() {

    const { state } = useLocation();
    // const { grade_level } = useParams();

    const [isEnrolled, setIsEnrolled] = useState(() => {
        return localStorage.getItem("isEnrolled") === "true";
    });

    const course = state?.course;

    function handleClick(e) {
        e.preventDefault();
        setIsEnrolled(true);
        localStorage.setItem("isEnrolled", "true");
    }

    function unrole() {
        localStorage.removeItem("isEnrolled");
        setIsEnrolled(false);
    }

    if (!course) {
        return <p>No course data available</p>;
    }

    return(
        <>
            <div className="all_course_start_container">
                <div className="header_course_start d-flex align-items-center w-100 ">
                    <div className="ps-5 text-white">
                        <p className="m-0">{course.grade_level || grade_level}</p>
                        <h1 className="header_text_course">{course.title}:<span>{course.grade_level}</span></h1>
                    </div>
                    <div className="getStart_container w-25">
                        <div className="getStart_heder w-100"></div>
                        <div className="pt-5 getStart_bottom w-100 h-50">
                            <div className="d-flex flex-column gap-4 text-center">
                                {isEnrolled ? (
                                    <button className="task_courseBtn w-100">Start Course</button>
                                ) : (
                                    <>
                                        <button className="task_courseBtn w-100">Not Enrolled</button>
                                        <button className="task_courseBtn w-100" onClick={handleClick}>Take this course</button>
                                    </>
                                )}
                                {/* <button className="task_courseBtn w-100" onClick={handleClick}>Take this Course</button> */}
                                <p>free</p>
                            </div>
                            <div>
                                <h5>Course Includes</h5>
                                <p>11 Lessons</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lessons_button_container d-flex flex-column gap-2 w-50">
                    <h4>Course Content</h4>
                    {isEnrolled ? (
                        <>
                            <button className="Unrole w-25" onClick={unrole}>Unrole</button>
                            <div className="w-100 complete_container d-flex align-items-center justify-content-center">
                                <p className="m-0 pe-4">0% Complete</p>
                                <hr className="w-50 m-0" />
                            </div>
                            <div className="w-100 all_lessons_button d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="lessons_button">{course.grade_level} {course.title}</Link>
                                    {/* <i class="fa-solid fa-lock ps-3 lock_i"></i> */}
                                </div>
                                <span className="status-circle"></span>
                            </div>
                        </>
                    ) : (
                    <>
                        <div className="w-100 all_lessons_button d-flex align-items-center justify-content-between">
                            <div>
                                <Link className=
                                    {`lessons_button ${!isEnrolled ? "locked" : ""}`}
                                    to={isEnrolled ? "/lesson-page" : "#"}
                                    onClick={(e) => !isEnrolled && e.preventDefault()}>{course.grade_level} {course.title}
                                </Link>
                                <i class="fa-solid fa-lock ps-3 lock_i"></i>
                            </div>
                            <span className="status-circle"></span>
                        </div>
                    </>
                    )}
                    

                </div>
            </div>
        </>
    )
}

export default CourseStart;