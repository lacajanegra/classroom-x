import { Link } from 'react-router-dom';
import CourseModel from '../../model/course.model';
import TableContainer from '../common/TableContainer';

interface TeacherCoursesProps {
    courses: CourseModel[]
    handler: () => {}
}

const TeacherCourses: React.FunctionComponent<TeacherCoursesProps> = ({ courses, handler }: TeacherCoursesProps) => {

    return (
        <TableContainer elements={courses} >
            < table className='table table-sm table-striped' >
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} >
                            <td>{course.name}</td>
                            <td>
                                <div className="d-flex flex-row-reverse mb-2">
                                    <Link to={`/teacher-course/${course.id}`}>
                                        <div className="btn btn-outline-primary btn-sm">
                                            Ver
                                        </div>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer >
    )
}

export default TeacherCourses;