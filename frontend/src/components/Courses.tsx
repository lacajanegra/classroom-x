import { useEffect, useState } from 'react'
import CourseModel from '../model/course.model';
import courseService from '../services/course.service'

const Courses: React.FunctionComponent = () => {

    // const [loading, setLoading] = useState<boolean>(false)
    // const [courses, setCoures] = useState<CourseModel[]>([])


    //     getCourses() {
    //     courseService.getCourses()
    //         .then((response: CourseModel[]) => { this.setState({ courses: response }) })
    //         .catch(() => { this.setState({ courses: [] }) })
    //         .finally(() => { this.setState({ loading: false }) })
    // }

    return (
        <div>
            {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
            )}

            <h3><span>Listado de Materias</span></h3>

            <div className="d-flex flex-row-reverse mb-2">
                <button className='btn btn-outline-primary btn-sm' title="agregar" >
                    <span className="bi bi-plus-circle me-2"></span>Agregar
                </button>
            </div>

            {courses && courses.length === 0 && <span>Aun no existen materias, puede agregarlas en el administrador</span>}

            {courses && courses.length !== 0 &&
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td scope="row">{course.name}</td>
                                    <td>
                                        <button
                                            className="outline-primary btn-sm"
                                        // onClick={editContact.bind(this, c)}
                                        >
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            } */}
        </div>
    );
}

export default Courses;