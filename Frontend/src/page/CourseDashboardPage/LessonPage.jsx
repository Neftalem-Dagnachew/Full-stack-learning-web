import { useLocation, useNavigate } from "react-router-dom";
import "../CourseDashboardPage/style/LessonPage.css"

function LessonPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const course = state?.course;

    if (!course) return <p>Course not found</p>;

    return (
        <div className="all_course_lesson_container">
            <div className="course_lesson_container ps-4 pt-5 w-25">
                <div className="pe-4">
                    <button className="mb-4 backTo_course_btn">Back to course</button>
                    <h3>{course.grade_level} {course.subject_name} {course.title}</h3>
                    <hr className="hr_complit mb-3"/>
                    <p className="m-0">0%  Complete</p>
                    <hr className="hr_container" />
                    <div>
                        <p className="lessons_menu ps-4 d-flex justify-content-start align-items-center">{course.grade_level} {course.subject_name} {course.title} <span className="status-circle ms-5"></span></p>
                    </div>
                </div> 
            </div>
            <div className="video_lesson_container">
                
            </div>
        </div>
    );
}

export default LessonPage;