import CourseModel from '../../model/course.model';
import TableContainer from '../common/TableContainer';
import Course from './Course';

interface CoursesProps {
    courses: CourseModel[]
    handler: () => {}
}

const Courses: React.FunctionComponent<CoursesProps> = ({ courses, handler }: CoursesProps) => {

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
                            <Course course={course} buttonName="Editar" handler={handler} />
                        </div>
                    </td>
                </tr>
            ))}
        />
    )
}

export default Courses;