
import "../CourseDashboardPage/style/CourseDashboard.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CourseContext } from "../../context/CourseContext";

function CourseDashboard() {

    const { user } = useContext(AuthContext);
    const { grade, setGrade, subject, setSubject, courses, loading, feachCourses } = useContext(CourseContext);

    const handleSubimt = async (e) => {
        e.preventDefault();

        try {
            await feachCourses(grade, subject);
        } catch (err) {
            alert(err.message);
        }

    }

    return(
        <>
            <div className="course_layout">
                <form onSubmit={handleSubimt}>
                    <div className="CourseDashboard_container gap-4 d-flex align-items-center justify-content-center">

                        <div className="text-center">
                            <h3>Educational standards</h3>
                            <select value={grade} onChange={(e) => setGrade(e.target.value)} className="grade_select">
                                <option value="">All rooms</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 10">Grade 10</option>
                                <option value="Grade 11">Grade 11</option>
                                <option value="Grade 12">Grade 12</option>
                            </select>
                        </div>

                        <div className="text-center">
                            <h3>Type of education</h3>
                            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="subject_select">
                                <option value="">All subject</option>
                                <option value="Maths">Maths</option>
                                <option value="Physics">Physics</option>
                                <option value="Biology">Biology</option>
                                <option value="Chemistry">Chemistry</option>
                            </select>
                        </div>

                        <div className="pt-5">
                            <button type="submit" disabled={loading} className="get_course_btn">{ loading ? "Getting.." : "Get Course" }</button>
                        </div>
                    </div>
                </form>


                { courses.length > 0 ? (courses.map((course) => (

                    <div className="get_course_container d-flex justify-content-center">
                    <div className="course_cards">
                        <div className="w-100 h-50">
                            
                         </div>
                        <div className="h-50 gap-3 d-flex justify-content-center flex-column">
                            <div className="ps-3">
                                <h4>{course.title}</h4>
                                <h4>{course.description}</h4>
                            </div>

                            <button className="see_course_btn ms-3">See</button>

                        </div>

                    </div>
                </div>
                    
                ))) : ( <p>{loading ? "Loading..." : "Don't have course"}</p> )}

            </div>
        </>
    )
}

export default CourseDashboard;