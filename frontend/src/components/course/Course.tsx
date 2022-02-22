import { Form, Formik, FormikProps, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import CourseModel from '../../model/course.model';
import CourseSchema from '../../model/course.schema';
import courseService from '../../services/course.service';

interface CourseProps {
    course?: CourseModel
    buttonName: string
    handler: () => {}
}

const Course: React.FunctionComponent<CourseProps> = ({ course, buttonName, handler }: CourseProps) => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const initialValues: CourseModel = {
        id: course?.id,
        name: course?.name || '',
        message: ''
    }

    const addCourse = async (request: CourseModel, { setErrors, resetForm }: FormikHelpers<CourseModel>) => {
        await courseService.addCourse(request)
            .then(() => {
                resetForm()
                handler()
                setShow(false)
            }).catch(() => {
                setErrors({ message: 'Materia ya existe' })
            })
    }

    const editCourse = async (request: CourseModel, { setErrors, resetForm }: FormikHelpers<CourseModel>) => {
        await courseService.editCourse(request)
            .then(() => {
                resetForm()
                handler()
                setShow(false)
            }).catch(() => {
                setErrors({ message: 'Materia ya existe' })
            })
    }

    const save = async (request: CourseModel, formik: FormikHelpers<CourseModel>) => {
        if (!course?.id) await addCourse(request, formik)
        else await editCourse(request, formik)
    }

    const nameElement = ({ errors, touched }: FormikProps<CourseModel>) => {
        const hasError: boolean = !(!touched.name || !errors.name)
        return (
            <div className="form-group">
                <label htmlFor="name" >Nombre</label>
                <Field name="name" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Nombre" />
                <ErrorMessage name="name" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const buttonsElement = ({ isSubmitting, resetForm }: FormikProps<CourseModel>) => {
        return (
            <div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => { resetForm(); handleClose() }} disabled={isSubmitting}>
                    Cerrar
                </button>
                <button type="submit" form={`courseId${course?.id}`} className="btn btn-primary btn-sm" disabled={isSubmitting}>
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>{course?.id ? "Editar" : "Guardar"}</span>
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
                validationSchema={CourseSchema}
                onSubmit={async (request, helpers) => {
                    await save(request, helpers)
                }}
            >
                {(formik: FormikProps<CourseModel>) => {
                    return (
                        <Form id={`courseId${course?.id}`}>
                            <Modal show={show} onHide={handleClose}>

                                <Modal.Header>
                                    <Modal.Title>{course?.id ? "Editar Materia" : "Nueva Materia"}</Modal.Title>
                                    <ErrorMessage name="message" component="div" className="alert alert-danger" />
                                </Modal.Header>

                                <Modal.Body>
                                    {nameElement(formik)}
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

export default Course