import { Component } from 'react'
import CourseModel from '../../model/course.model';
import courseService from '../../services/course.service'
import Course from './Course';
import Courses from './Courses';
import MissingElements from '../common/MissingElements';
import Title from '../common/Title';
import AddButton from '../common/AddButton';

interface AdminCoursesProps {

}

interface AdminCoursesState {
    loading: boolean
    courses: CourseModel[]
}

class AdminCourses extends Component<AdminCoursesProps, AdminCoursesState> {

    constructor(props: AdminCoursesProps) {
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
        await courseService.getCourses()
            .then((response) => { this.setState({ courses: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, courses } = this.state

        return (
            <div>
                <Title title='Listado de Materias' loading={loading} />
                <MissingElements elements={courses} message='A&uacute;n no existen materias, puedes agregar nuevas' />

                <AddButton>
                    <Course buttonName='Agregar' handler={this.getCourses} />
                </AddButton>

                <Courses courses={courses} handler={this.getCourses} />
            </div>
        );
    }
}

export default AdminCourses;