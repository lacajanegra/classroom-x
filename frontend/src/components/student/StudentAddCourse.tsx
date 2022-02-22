import { Form, Formik, FormikProps, ErrorMessage, FormikHelpers } from 'formik';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Select, { SingleValue } from 'react-select';
import CourseToLearnModel from '../../model/course-to-learn.model';
import CourseToLearnStudentModel from '../../model/course-to-learn-student.model';
import CourseToLearnStudentSchema from '../../model/course-to-learn-student.schema';
import CourseToLearnTeacherModel from '../../model/course-to-learn-teacher.model';
import studentService from '../../services/student.service';

interface StudentAddCourseProps {
    courses: CourseToLearnModel[]
    buttonName: string
    handler: () => {}
}

const StudentAddCourse: React.FunctionComponent<StudentAddCourseProps> = ({ courses, buttonName, handler }: StudentAddCourseProps) => {

    const [show, setShow] = useState(false)
    const [teachers, setTeachers] = useState<CourseToLearnTeacherModel[]>([])

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const initialValues: CourseToLearnStudentModel = {
        courseId: '',
        teacherId: '',
        message: ''
    }

    const save = async (request: CourseToLearnStudentModel, { setErrors, resetForm }: FormikHelpers<CourseToLearnStudentModel>) => {
        await studentService.addCourse(request)
            .then(() => {
                resetForm()
                handler()
                setShow(false)
            }).catch(() => {
                setErrors({ message: 'Materia ya inscrita' })
            })
    }

    const coursesElement = ({ errors, touched, handleBlur, setFieldValue }: FormikProps<CourseToLearnStudentModel>) => {
        const hasError: boolean = !(!touched.courseId || !errors.courseId)
        return (
            <div className="form-group">
                <label htmlFor="courseId">Materia</label>
                <Select<CourseToLearnModel>
                    id="courseId"
                    options={courses}
                    getOptionLabel={(option: CourseToLearnModel) => option.name}
                    getOptionValue={(option: CourseToLearnModel) => option.id || ''}
                    placeholder="Seleccione un materia"
                    onChange={(option: SingleValue<CourseToLearnModel>) => { setFieldValue("courseId", option?.id) ; setTeachers(option?.teachers || [])}}
                    onBlur={handleBlur}
                    className={hasError ? 'is-invalid' : ''}
                />
                <ErrorMessage name="courseId" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const teachersElement = ({ errors, touched, handleBlur, setFieldValue }: FormikProps<CourseToLearnStudentModel>) => {
        const hasError: boolean = !(!touched.teacherId || !errors.teacherId)
        return (
            <div className="form-group">
                <label htmlFor="teacherId">Profesor</label>
                <Select<CourseToLearnTeacherModel>
                    id="teacherId"
                    options={teachers}
                    getOptionLabel={(option: CourseToLearnTeacherModel) => option.name}
                    getOptionValue={(option: CourseToLearnTeacherModel) => option.id || ''}
                    placeholder="Seleccione un profesor"
                    onChange={(option: SingleValue<CourseToLearnTeacherModel>) => setFieldValue("teacherId", option?.id)}
                    onBlur={handleBlur}
                    className={hasError ? 'is-invalid' : ''}
                />
                <ErrorMessage name="teacherId" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const buttonsElement = ({ isSubmitting, resetForm }: FormikProps<CourseToLearnStudentModel>) => {
        return (
            <div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => { resetForm(); handleClose() }} disabled={isSubmitting}>
                    Cerrar
                </button>
                <button type="submit" form='courseStudentId' className="btn btn-primary btn-sm" disabled={isSubmitting}>
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Guardar</span>
                </button>
            </div>
        )
    }

    return (
        <div>
            <button onClick={handleShow} className='btn btn-outline-primary btn-sm' >
                <span className="bi bi-plus-circle me-2"></span>{buttonName}
            </button>

            <Formik
                initialValues={initialValues}
                validationSchema={CourseToLearnStudentSchema}
                onSubmit={async (request, helpers) => {
                    await save(request, helpers)
                }}
            >
                {(formik: FormikProps<CourseToLearnStudentModel>) => {
                    return (
                        <Form id='courseStudentId'>
                            <Modal show={show} onHide={handleClose}>

                                <Modal.Header>
                                    <Modal.Title>Nueva Materia para Aprender</Modal.Title>
                                    <ErrorMessage name="message" component="div" className="alert alert-danger" />
                                </Modal.Header>

                                <Modal.Body>
                                    {coursesElement(formik)}
                                    {teachersElement(formik)}
                                </Modal.Body>
                                <Modal.Footer>
                                    {buttonsElement(formik)}
                                </Modal.Footer>

                            </Modal>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default StudentAddCourse