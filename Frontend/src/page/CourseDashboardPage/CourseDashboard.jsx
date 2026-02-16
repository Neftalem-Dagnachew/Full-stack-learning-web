
import "../CourseDashboardPage/style/CourseDashboard.css"

function CourseDashboard() {
    return(
        <>
            <div className="course_layout">
                <div className="CourseDashboard_container gap-4 d-flex align-items-center justify-content-center">

                    <div className="text-center">
                        <h3>Educational standards</h3>
                        <select className="grade_select" name="" id="">
                            <option value="">All rooms</option>
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <h3>Type of education</h3>
                        <select className="subject_select" name="" id="">
                            <option value="">All subject</option>
                            <option value="Maths">Maths</option>
                            <option value="Physics">Physics</option>
                            <option value="Biology">Biology</option>
                            <option value="Chemistry">Chemistry</option>
                        </select>
                    </div>

                    <div className="pt-5">
                        <button className="get_course_btn">Get Course.</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CourseDashboard;