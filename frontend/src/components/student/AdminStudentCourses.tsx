import { Component } from 'react'
import Title from '../common/Title';
import MissingElements from '../common/MissingElements';
import StudentCourses from './StudentCourses';
import StudentAddCourse from './StudentAddCourse';
import CourseStudentModel from '../../model/course-student.model';
import CourseToLearnModel from '../../model/course-to-learn.model';
import studentService from '../../services/student.service';
import AddButton from '../common/AddButton';

interface AdminStudentCoursesProps {

}

interface AdminStudentCoursesState {
    loading: boolean
    courseToLearn: CourseToLearnModel[]
    courses: CourseStudentModel[]
}

class AdminStudentCourses extends Component<AdminStudentCoursesProps, AdminStudentCoursesState> {

    constructor(props: AdminStudentCoursesProps) {
        super(props)

        this.state = {
            loading: true,
            courseToLearn: [],
            courses: []
        }

        this.getAll = this.getAll.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getAll();
    }

    getAll = async () => {
        await this.getCoursesToLearn()
        await this.getCourses()
    }

    getCoursesToLearn = async () => {
        this.setState({ loading: true })
        await studentService.getCoursesToLearn()
            .then((response) => { this.setState({ courseToLearn: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    getCourses = async () => {
        this.setState({ loading: true })
        await studentService.getCourses()
            .then((response) => { this.setState({ courses: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, courses, courseToLearn } = this.state

        return (
            < div >
                <Title title='Listado de Materias' loading={loading} />
                <MissingElements elements={courses} message='A&uacute;n no existen materias a estudiar, puedes agregar nuevas' />

                <AddButton>
                    <StudentAddCourse courses={courseToLearn} handler={this.getAll} buttonName='Agregar' />
                </AddButton >

                <StudentCourses courses={courses} />
            </div >
        );
    }
}

export default AdminStudentCourses;