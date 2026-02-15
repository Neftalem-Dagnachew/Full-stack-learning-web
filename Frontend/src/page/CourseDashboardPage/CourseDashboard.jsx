import { useState, useContext } from 'react';
import { getCourses } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

const CourseDashboard = () => {
    const { user } = useContext(AuthContext);
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!grade || !subject) {
            alert("please first choice grade and subject ");
            return;
        }

        setLoading(true);
        try {
            const data = await getCourses(grade, subject);
            setCourses(data);
        } catch (err) {
            alert(err.message);
            setCourses([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className='all_container'>
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2>ሰላም {user?.first_name || 'ተማሪ'}!choice your course </h2>

            {/* ---(Filter Section) --- */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <select 
                    value={grade} 
                    onChange={(e) => setGrade(e.target.value)}
                    style={{ padding: '10px', borderRadius: '5px', minWidth: '150px' }}
                >
                    <option value="">Grade choice</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                </select>

                <select 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ padding: '10px', borderRadius: '5px', minWidth: '150px' }}
                >
                    <option value="">Subject choice</option>
                    <option value="Maths">Maths</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                </select>

                <button 
                    type="submit" 
                    style={{ padding: '10px 25px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    {loading ? 'Geting..' : 'Get Course'}
                </button>
            </form>

            <hr />

            {/* --- (Results Section) --- */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <div key={course.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                            <iframe 
                                width="100%" 
                                height="200" 
                                src={`https://www.youtube.com/embed/${course.video_url}`} 
                                title={course.title}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <div style={{ padding: '15px' }}>
                                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{course.title}</h3>
                                <p style={{ color: '#666', fontSize: '14px' }}>{course.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', gridColumn: '1 / -1', marginTop: '50px', color: '#888' }}>
                        <p>non thing got course</p>
                    </div>
                )}
            </div>
        </div>
        </div>
        </>
    );
};

export default CourseDashboard;