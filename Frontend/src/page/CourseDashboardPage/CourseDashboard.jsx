
import "../CourseDashboardPage/style/CourseDashboard.css"

function CourseDashboard() {
    return(
        <>
            <div className="course_layout">
                <div className="CourseDashboard_container d-flex align-items-center justify-content-center">

                    <div>
                        <h3>Educational standards</h3>
                        <select className="grade_select" name="" id="">
                            <option value="">All rooms</option>
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CourseDashboard;