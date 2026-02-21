import { useLocation, useNavigate } from "react-router-dom";

function LessonPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const course = state?.course;

    if (!course) return <p>Course not found</p>;

    return (
        <h1>23456</h1>
    );
}

export default LessonPage;