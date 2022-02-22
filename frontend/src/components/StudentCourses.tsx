import CourseStudentModel from '../model/course-student.model';
import TableContainer from './TableContainer';

interface StudentCoursesProps {
    courses: CourseStudentModel[]
    handler: () => {}
}

const StudentCourses: React.FunctionComponent<StudentCoursesProps> = ({ courses, handler }: StudentCoursesProps) => {

    return (
        <TableContainer elements={courses} >
            < table className='table table-sm table-striped' >
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Profesor</th>
                        <th scope="col">Calificaci&oacute;n</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} >
                            <td>{course.course}</td>
                            <td>{course.teacher}</td>
                            <td>{course.qualification}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer >
    )
}

export default StudentCourses;