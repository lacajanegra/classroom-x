import { Component } from 'react'
import CourseModel from '../model/course.model';
import courseService from '../services/course.service'
import Course from './Course';

interface CoursesProps {

}

interface CoursesState {
    loading: boolean
    courses: CourseModel[]
}

class Courses extends Component<CoursesProps, CoursesState> {

    constructor(props: CoursesProps) {
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
            < div >
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}

                <h3><span>Listado de Materias</span></h3>

                <div className="d-flex flex-row-reverse mb-2">
                    <Course name='' buttonName='Agregar' handler={this.getCourses} />
                </div>

                {courses && courses.length === 0 && <span>A&uacute;n no existen materias, puedes agregar nuevas</span>}

                {
                    courses && courses.length !== 0 &&
                    <div className="table-responsive">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course) => (
                                    <tr key={course.id} >
                                        <td>{course.name}</td>
                                        <td>
                                            <div className="d-flex flex-row-reverse mb-2">
                                                <Course id={course.id} name={course.name} buttonName="Editar" handler={this.getCourses} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div >
        );
    }
}

export default Courses;