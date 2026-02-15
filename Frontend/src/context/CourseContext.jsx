
import { createContext, useState } from "react";
import { getCourses } from "../services/api";

export const CourseContext = createContext();

function CourseProvider({ children }) {
    const [ grade, setGrade ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ courses, setCourses ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const feachCourses = async (g, s) => {
        setLoading(true);

        try {
            const data = await getCourses(g, s)
            setCourses(data);
        } catch (err) {
            console.error(err);
            setCourses([]);
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
            <CourseContext.Provider value={{ grade, setGrade, subject, setSubject, courses, loading, feachCourses }}>
                { children }
            </CourseContext.Provider>
        </>
    )

}

export default CourseProvider;