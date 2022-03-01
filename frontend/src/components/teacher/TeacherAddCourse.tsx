import { Form, Formik, FormikProps, ErrorMessage, FormikHelpers, Field } from 'formik';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import CourseModel from '../../model/course.model';
import CourseTeacherModel from "../../model/course-teacher.model";
import CourseTeacherSchema from '../../model/course-teacher.schema';
import teacherService from '../../services/teacher.service';

interface TeacherAddCourseProps {
    courses: CourseModel[]
    buttonName: string
    handler: () => {}
}

const TeacherAddCourse: React.FunctionComponent<TeacherAddCourseProps> = ({ courses, buttonName, handler }: TeacherAddCourseProps) => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const initialValues: CourseTeacherModel = {
        id: '',
        message: ''
    }

    const save = async (request: CourseTeacherModel, { setErrors, resetForm }: FormikHelpers<CourseTeacherModel>) => {
        await teacherService.addCourse(request)
            .then(() => {
                resetForm()
                handler()
                setShow(false)
            }).catch(() => {
                setErrors({ message: 'Materia ya existe' })
            })
    }

    const coursesElement = ({ errors, touched, handleBlur, setFieldValue }: FormikProps<CourseTeacherModel>) => {
        const hasError: boolean = !(!touched.id || !errors.id)
        return (
            <div className="form-group">
                <label htmlFor="id">Materia</label>
                <Field as="select" name="id" className={hasError ? 'custom-select is-invalid' : 'custom-select'}>
                    <option value='' label='...' />
                    {courses.map((option) => (<option key={option.id} value={option.id} label={option.name} />))}
                </Field>
                <ErrorMessage name="id" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const buttonsElement = ({ isSubmitting, resetForm }: FormikProps<CourseTeacherModel>) => {
        return (
            <div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => { resetForm(); handleClose() }} disabled={isSubmitting}>
                    Cerrar
                </button>
                <button type="submit" form='courseTeacherId' className="btn btn-primary btn-sm" disabled={isSubmitting}>
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
                validationSchema={CourseTeacherSchema}
                onSubmit={async (request, helpers) => {
                    await save(request, helpers)
                }}
            >
                {(formik: FormikProps<CourseTeacherModel>) => {
                    return (
                        <Form id='courseTeacherId'>
                            <Modal show={show} onHide={handleClose}>

                                <Modal.Header>
                                    <Modal.Title>Nueva Materia a Ense&ntilde;ar</Modal.Title>
                                    <ErrorMessage name="message" component="div" className="alert alert-danger" />
                                </Modal.Header>

                                <Modal.Body>
                                    {coursesElement(formik)}
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

export default TeacherAddCourse