import { createContext, useState, useEffect } from "react";
import { getCourses } from "../services/api";

export const CourseContext = createContext();

function CourseProvider({ children }) {
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!grade || !subject) return;

        const fetchCourses = async () => {
            setLoading(true);
            try {
                const data = await getCourses(grade, subject);
                setCourses(data);
            } catch (err) {
                console.error(err);
                setCourses([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, [grade, subject]);

    return (
        <CourseContext.Provider
            value={{ grade, setGrade, subject, setSubject, courses, loading }}
        >
            {children}
        </CourseContext.Provider>
    );
}

export default CourseProvider;