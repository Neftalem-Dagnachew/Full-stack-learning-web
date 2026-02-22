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
                <div className="w-100 pe-4">
                    <button className="mb-4 backTo_course_btn">Back to course</button>
                    <h3>Grade 9 Biology Unit 6: Ecology</h3>
                    <hr className="hr_complit"/>
                </div> 
            </div>
        </div>
    );
}

export default LessonPage;