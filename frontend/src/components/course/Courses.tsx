import CourseModel from '../../model/course.model';
import TableContainer from '../common/TableContainer';
import Course from './Course';

interface CoursesProps {
    courses: CourseModel[]
    handler: () => {}
}

const Courses: React.FunctionComponent<CoursesProps> = ({ courses, handler }: CoursesProps) => {

    return (
        <TableContainer elements={courses} >
            <table className='table table-sm table-striped'>
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
                                    <Course course={course} buttonName="Editar" handler={handler} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    )
}

export default Courses;