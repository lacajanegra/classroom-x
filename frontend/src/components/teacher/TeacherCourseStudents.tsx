import TableContainer from '../common/TableContainer';
import CourseTeacherStudentDetailsModel from '../../model/course-teacher-student-details.model';
import TeacherCourseStudent from './TeacherCourseStudent';

interface TeacherCourseStudentsProps {
    id: string
    students: CourseTeacherStudentDetailsModel[]
    handler: () => {}
}

const TeacherCourseStudents: React.FunctionComponent<TeacherCourseStudentsProps> = ({ id, students, handler }: TeacherCourseStudentsProps) => {

    return (
        <TableContainer
            elements={students}
            header={
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Calificaci&oacute;n</th>
                    <th scope="col"></th>
                </tr>
            }
            body={students.map((student) => (
                <tr key={student.id} >
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.qualification}</td>
                    <td>
                        <div className="d-flex flex-row-reverse">
                            <TeacherCourseStudent buttonName='Editar' id={id} student={student} handler={handler} />
                        </div>
                    </td>
                </tr>
            ))}
        />
    )
}

export default TeacherCourseStudents;