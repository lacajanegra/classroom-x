import { Link } from 'react-router-dom';
import CourseModel from '../../model/course.model';
import TableContainer from '../common/TableContainer';

interface TeacherCoursesProps {
    courses: CourseModel[]
    handler: () => {}
}

const TeacherCourses: React.FunctionComponent<TeacherCoursesProps> = ({ courses, handler }: TeacherCoursesProps) => {

    return (
        <TableContainer
            elements={courses}
            header={
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col"></th>
                </tr>
            }
            body={courses.map((course) => (
                <tr key={course.id} >
                    <td>{course.name}</td>
                    <td>
                        <div className="d-flex flex-row-reverse">
                            <Link to={`/teacher-course/${course.id}`}>
                                <div className="btn btn-outline-primary btn-sm">
                                    Ver
                                </div>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
        />
    )
}

export default TeacherCourses;