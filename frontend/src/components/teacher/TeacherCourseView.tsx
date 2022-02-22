import { Component } from 'react'
import Title from '../common/Title';
import CourseTeacherDetailsModel from '../../model/course-teacher-details.model';
import TeacherCourseStudents from './TeacherCourseStudents';
import teacherService from '../../services/teacher.service';
import MissingElements from '../common/MissingElements';

interface TeacherCourseViewProps {
    id: string
}

interface TeacherCourseViewState {
    loading: boolean
    id: string
    course?: CourseTeacherDetailsModel
}

class TeacherCourseView extends Component<TeacherCourseViewProps, TeacherCourseViewState> {

    constructor(props: TeacherCourseViewProps) {
        super(props)

        this.state = {
            loading: true,
            id: props.id,
            course: undefined
        }

        this.getCourse = this.getCourse.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getCourse();
    }

    getCourse = async () => {
        this.setState({ loading: true })
        await teacherService.getCourse(this.state.id)
            .then((response) => { this.setState({ course: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { id, loading, course } = this.state

        return (
            < div >
                <Title title={course?.name || ''} loading={loading} />
                <MissingElements elements={course?.students || []} message='No eres muy popular, informa sobre tu clase' />
                <TeacherCourseStudents id={id} students={course?.students || []} handler={this.getCourse} />
            </div >
        );
    }
}

export default TeacherCourseView;