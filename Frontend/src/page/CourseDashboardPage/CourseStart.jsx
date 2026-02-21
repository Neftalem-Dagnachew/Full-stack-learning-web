
import "../CourseDashboardPage/style/CourseStart.css"

import { CourseContext } from "../../context/CourseContext";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

function CourseStart() {

    const { state } = useLocation();
  const { grade_level } = useParams();

  const course = state?.course;

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
                                <button className="task_courseBtn w-100">Take this Course</button>
                                <p>free</p>
                            </div>
                            <div>
                                <h5>Course Includes</h5>
                                <p>11 Lessons</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Course Content</h4>
                    <h5></h5>
                </div>
            </div>
        </>
    )
}

export default CourseStart;