import { useLocation, useNavigate } from "react-router-dom";
import "../CourseDashboardPage/style/LessonPage.css"

function LessonPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const course = state?.course;

    if (!course) return <p>Course not found</p>;

    return (
        <div className="all_course_start_container">
        </div>
    );
}

export default LessonPage;