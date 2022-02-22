import { Component } from 'react'
import Title from './Title';
import MissingElements from './MissingElements';
import studentService from '../services/student.service';
import CourseStudentModel from '../model/course-student.model';
import StudentCourses from './StudentCourses';

interface AdminStudentCoursesProps {

}

interface AdminStudentCoursesState {
    loading: boolean
    courses: CourseStudentModel[]
}

class AdminStudentCourses extends Component<AdminStudentCoursesProps, AdminStudentCoursesState> {

    constructor(props: AdminStudentCoursesProps) {
        super(props)

        this.state = {
            loading: true,
            courses: []
        }

        this.getCourses = this.getCourses.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getCourses();
    }

    getCourses = async () => {
        this.setState({ loading: true })
        await studentService.getCourses()
            .then((response) => { this.setState({ courses: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, courses } = this.state

        return (
            < div >
                <Title title='Listado de Materias' loading={loading} />
                <MissingElements elements={courses} message='A&uacute;n no existen materias a estudiar, puedes agregar nuevas' />

                <div className="d-flex flex-row-reverse mb-2">
                    {/* <StudentAddCourse courses={courses} handler={this.getCourses} buttonName='Agregar' /> */}
                </div >

                <StudentCourses courses={courses} handler={this.getCourses} />
            </div >
        );
    }
}

export default AdminStudentCourses;