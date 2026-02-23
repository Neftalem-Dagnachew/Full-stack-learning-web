import { useLocation, useNavigate } from "react-router-dom";
import "../CourseDashboardPage/style/LessonPage.css"

function LessonPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    // const { grade_level, subject_name } = useParams();
    const course = state?.course;

    if (!course) return <p>Course not found</p>;

    return (
        <div className="all_course_lesson_container">
            <div className="course_lesson_container ps-4 pt-5 w-25">
                <div className="pe-4">
                    <button className="mb-4 backTo_course_btn " onClick={() => navigate(-1)}>Back to course</button>
                    <h3>{course.grade_level} {course.subject_name} {course.title}</h3>
                    <hr className="hr_complit mb-3"/>
                    <p className="m-0">0%  Complete</p>
                    <hr className="hr_container" />
                    <div>
                        <p className="lessons_menu ps-4 d-flex justify-content-start align-items-center">{course.grade_level} {course.subject_name} {course.title} <span className="status-circle ms-3"></span></p>
                    </div>
                </div> 
            </div>
            <div className="video_lesson_container">
                <div className="video_container w-100 h-100 d-flex flex-column ">
                    <hr />
                    <p className="mb-5">Lesson 1 of 11</p>
                    <div className="video_warap w-100 h-100">
                        <h1 className="mb-5">{course.grade_level} {course.subject_name} {course.title}</h1>
                        <iframe className="video_cource w-100 " title="Course Video" src={`https://www.youtube.com/embed/${course.video_url}`} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonPage;