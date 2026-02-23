import "../CourseDashboardPage/style/CourseStart.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CourseStart() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { grade_level, subject_name } = useParams();

    // 1. Data comes from backend as a unit object containing a lessons array
    const unitData = state?.course;

    const [isEnrolled, setIsEnrolled] = useState(() => {
        // Use unit_id for specific enrollment check
        return localStorage.getItem(`enrolled_unit_${unitData?.unit_id}`) === "true";
    });

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Check progress using the unit_id
        const savedProgress = localStorage.getItem(`progress_${unitData?.unit_id}`);
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }
    }, [unitData?.unit_id]);

    function handleClick(e) {
        e.preventDefault();
        setIsEnrolled(true);
        localStorage.setItem(`enrolled_unit_${unitData.unit_id}`, "true");
    }

    function unrole() {
        localStorage.removeItem(`enrolled_unit_${unitData.unit_id}`);
        setIsEnrolled(false);
    }

    if (!unitData) {
        return <p>No unit data available. Please go back to dashboard.</p>;
    }

    return (
        <>
            <div className="all_course_start_container">
                <div className="header_course_start d-flex align-items-center w-100 ">
                    <div className="ps-5 text-white">
                        <p className="m-0">{grade_level}</p>
                        {/* Use unitData.unit_title here */}
                        <h1 className="header_text_course">{unitData.unit_title}:<span>{grade_level}</span></h1>
                    </div>
                    <div className="getStart_container w-25">
                        <div className="getStart_heder w-100"></div>
                        <div className="pt-5 getStart_bottom w-100 h-50">
                            <div className="d-flex flex-column gap-4 text-center">
                                {isEnrolled ? (
                                    /* Use the first lesson as the 'Start' point if enrolled */
                                    <button 
                                        className="task_courseBtn w-100" 
                                        onClick={() => navigate(`/my-dashboard/course/${unitData.lessons[0]?.id}/${grade_level}/${subject_name}/lesson`, { state: { course: unitData.lessons[0] } })}
                                    >
                                        Start Course
                                    </button>
                                ) : (
                                    <>
                                        <button className="notEnrolled_btn w-100">Not Enrolled</button>
                                        <button className="task_courseBtn w-100" onClick={handleClick}>Take this course</button>
                                    </>
                                )}
                                <p>free</p>
                            </div>
                            <div>
                                <h5>Course Includes</h5>
                                <p>{unitData.lessons?.length || 0} Lessons</p>
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
                                <p className="m-0 pe-4">{progress}% Complete</p>
                                <hr className="w-50 m-0" />
                            </div>
                            
                            {/* Map through the lessons inside the unit */}
                            {unitData.lessons?.map((lesson) => (
                                <div key={lesson.id} className="w-100 all_lessons_button d-flex align-items-center justify-content-between">
                                    <div>
                                        <Link 
                                            className="lessons_button"
                                            to={`/my-dashboard/course/${lesson.id}/${grade_level}/${subject_name}/lesson`}
                                            state={{ course: lesson }}
                                        >
                                            {lesson.title}
                                        </Link>
                                    </div>
                                    <span className="status-circle"></span>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {/* Locked View: Map through lessons even if not enrolled to show the titles */}
                            {unitData.lessons?.map((lesson) => (
                                <div key={lesson.id} className="w-100 all_lessons_button d-flex align-items-center justify-content-between">
                                    <div>
                                        <Link 
                                            className="lessons_button locked"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {lesson.title}
                                        </Link>
                                        <i className="fa-solid fa-lock ps-3 lock_i"></i>
                                    </div>
                                    <span className="status-circle"></span>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CourseStart;