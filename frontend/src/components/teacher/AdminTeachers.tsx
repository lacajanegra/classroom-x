import { Component } from 'react'
import TeacherModel from '../../model/teacher.model';
import teacherService from '../../services/teacher.service'
import Teachers from './Teachers';
import Title from '../common/Title';
import MissingElements from '../common/MissingElements';

interface AdminTeachersProps {

}

interface AdminTeachersState {
    loading: boolean
    teachers: TeacherModel[]
}

class AdminTeachers extends Component<AdminTeachersProps, AdminTeachersState> {

    constructor(props: AdminTeachersProps) {
        super(props)

        this.state = {
            loading: true,
            teachers: []
        }

        this.getTeachers = this.getTeachers.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getTeachers();
    }

    getTeachers = async () => {
        await teacherService.getTeachers()
            .then((response) => { this.setState({ teachers: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, teachers } = this.state

        return (
            <div>
                <Title title='Listado de Profesores' loading={loading} />
                <MissingElements elements={teachers} message='A&uacute;n no existen profesores inscritos' />
                <Teachers teachers={teachers} />
            </div>
        );
    }
}

export default AdminTeachers;