import { Component } from 'react'
import StudentModel from '../../model/student.model';
import studentService from '../../services/student.service';
import MissingElements from '../common/MissingElements';
import Title from '../common/Title';
import Students from './Students';

interface AdminStudentsProps {

}

interface AdminStudentsState {
    loading: boolean
    students: StudentModel[]
}

class AdminStudents extends Component<AdminStudentsProps, AdminStudentsState> {

    constructor(props: AdminStudentsProps) {
        super(props)

        this.state = {
            loading: true,
            students: []
        }

        this.getStudents = this.getStudents.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.getStudents();
    }

    getStudents = async () => {
        await studentService.getStudents()
            .then((response) => { this.setState({ students: response.data }) })
            .catch((error) => { console.error(error) })
            .finally(() => { this.setState({ loading: false }) })
    }

    render() {

        const { loading, students } = this.state

        return (
            <div>
                <Title title='Listado de Estudiantes' loading={loading} />
                <MissingElements elements={students} message='A&uacute;n no existen estudiantes inscritos' />
                <Students students={students} />
            </div>
        );
    }
}

export default AdminStudents;