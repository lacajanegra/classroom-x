import CourseStudentModel from '../../model/course-student.model';
import TableContainer from '../common/TableContainer';

interface StudentCoursesProps {
    courses: CourseStudentModel[]
}

const StudentCourses: React.FunctionComponent<StudentCoursesProps> = ({ courses }: StudentCoursesProps) => {

    return (
        <TableContainer
            elements={courses}
            header={
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Profesor</th>
                    <th scope="col">Calificaci&oacute;n</th>
                </tr>
            }
            body={courses.map((course) => (
                <tr key={course.id} >
                    <td>{course.course}</td>
                    <td>{course.teacher}</td>
                    <td>{course.qualification}</td>
                </tr>
            ))}
        />
    )
}

export default StudentCourses;