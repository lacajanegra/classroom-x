import { Form, Formik, FormikProps, ErrorMessage, FormikHelpers, Field } from 'formik';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import CourseQualificationModel from '../../model/course-qualification.model';
import CourseQualificationSchema from '../../model/course-qualification.schema';
import CourseTeacherStudentDetailsModel from '../../model/course-teacher-student-details.model';
import teacherService from '../../services/teacher.service';

interface TeacherCourseStudentProps {
    id: string,
    student: CourseTeacherStudentDetailsModel
    buttonName: string
    handler: () => {}
}

const TeacherCourseStudent: React.FunctionComponent<TeacherCourseStudentProps> = ({ id, student, buttonName, handler }: TeacherCourseStudentProps) => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const initialValues: CourseQualificationModel = {
        courseId: id,
        studentId: student.id,
        qualification: student.qualification,
        message: ''
    }

    const save = async (request: CourseQualificationModel, { setErrors, resetForm }: FormikHelpers<CourseQualificationModel>) => {
        await teacherService.updateQualification(request)
            .then(() => {
                resetForm()
                handler()
                setShow(false)
            }).catch(() => {
                setErrors({ message: 'No es posible actualizar la calificación' })
            })
    }

    const qualificationElement = ({ errors, touched }: FormikProps<CourseQualificationModel>) => {
        const hasError: boolean = !(!touched.qualification || !errors.qualification)
        return (
            <div className="form-group">
                <label htmlFor="qualification" >Calificaci&oacute;n</label>
                <Field name="qualification" type="number" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Calificaci&oacute;n" />
                <ErrorMessage name="qualification" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const buttonsElement = ({ isSubmitting, resetForm }: FormikProps<CourseQualificationModel>) => {
        return (
            <div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => { resetForm(); handleClose() }} disabled={isSubmitting}>
                    Cerrar
                </button>
                <button type="submit" form={`courseStudentTeacherId${student.id}`} className="btn btn-primary btn-sm" disabled={isSubmitting}>
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
                validationSchema={CourseQualificationSchema}
                onSubmit={async (request, helpers) => {
                    await save(request, helpers)
                }}
            >
                {(formik: FormikProps<CourseQualificationModel>) => {
                    return (
                        <Form id={`courseStudentTeacherId${student.id}`}>
                            <Modal show={show} onHide={handleClose}>

                                <Modal.Header>
                                    <Modal.Title>Informaci&oacute;n del estudiante { student.name }</Modal.Title>
                                    <ErrorMessage name="message" component="div" className="alert alert-danger" />
                                </Modal.Header>

                                <Modal.Body>
                                    {qualificationElement(formik)}
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

export default TeacherCourseStudent