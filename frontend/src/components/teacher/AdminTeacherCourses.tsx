import { Component } from 'react'
import CourseModel from '../../model/course.model';
import teacherService from '../../services/teacher.service';
import TeacherCourses from './TeacherCourses';
import Title from '../common/Title';
import MissingElements from '../common/MissingElements';
import TeacherAddCourse from './TeacherAddCourse';


interface AdminTeacherCoursesProps {

}

interface AdminTeacherCoursesState {
    loading: boolean
    courseToTeach: CourseModel[]
    courses: CourseModel[]
}

class AdminTeacherCourses extends Component<AdminTeacherCoursesProps, AdminTeacherCoursesState> {

    constructor(props: AdminTeacherCoursesProps) {
        super(props)

        this.state = {
            loading: true,
            courseToTeach: [],
            courses: []
        }

        this.getAll = this.getAll.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getAll();
    }

    getAll = async () => {
        await this.getCoursesToTeach()
        await this.getCourses()
    }

    getCoursesToTeach = async () => {
        this.setState({ loading: true })
        await teacherService.getCoursesToTeach()
            .then((response) => { this.setState({ courseToTeach: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    getCourses = async () => {
        this.setState({ loading: true })
        await teacherService.getCourses()
            .then((response) => { this.setState({ courses: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, courseToTeach, courses } = this.state

        return (
            < div >
                <Title title='Listado de Materias' loading={loading} />
                <MissingElements elements={courses} message='A&uacute;n no existen materias a dictar, puedes agregar nuevas' />

                <div className="d-flex flex-row-reverse mb-2">
                    <TeacherAddCourse courses={courseToTeach} handler={this.getAll} buttonName='Agregar' />
                </div >

                <TeacherCourses courses={courses} handler={this.getCourses} />
            </div >
        );
    }
}

export default AdminTeacherCourses;