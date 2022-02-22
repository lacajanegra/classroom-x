import './Form.css'

import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';

import CreateUserModel from '../model/create-user.model';
import CreateUserSchema from '../model/create-user.schema';
import { OnChangeValue } from 'react-select';
import Select from 'react-select';
import UserType from '../model/user-type.model';
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import userService from '../services/user.service';

const Register: React.FunctionComponent = () => {

    const [type, setType] = useState<UserType | null>({ id: "student", name: "Estudiante" })

    const navigate = useNavigate()

    const options: UserType[] = [
        { id: "student", name: "Estudiante" },
        { id: "teacher", name: "Profesor" }
    ]

    const handleOptionChange = (option: OnChangeValue<UserType, false>) => {
        setType(option)
    }

    const initialValues: CreateUserModel = {
        username: '',
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const registerSuccess = () => {
        userService.clearUser()
        navigate("../login", { replace: true });
    }

    const register = async (request: CreateUserModel, { setErrors }: FormikHelpers<CreateUserModel>) => {
        const userType = type?.id || 'student'
        await authService.register(request, userType)
            .then(() => {
                registerSuccess()
            }).catch(() => {
                setErrors({ username: 'Usuario ya existe' })
            })
    }

    const usernameElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.username || !errors.username)
        return (
            <div className="form-group">
                <label htmlFor="username" >Usuario</label>
                <Field name="username" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Usuario" />
                <ErrorMessage name="username" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const nameElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.name || !errors.name)
        return (
            <div className="form-group">
                <label htmlFor="name" >Nombre</label>
                <Field name="name" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Nombre" />
                <ErrorMessage name="name" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const emailElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.email || !errors.email)
        return (
            <div className="form-group">
                <label htmlFor="email" >Correo</label>
                <Field name="email" type="email" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Correo" />
                <ErrorMessage name="email" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const passwordElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.password || !errors.password)
        return (
            <div className="form-group">
                <label htmlFor="password">Contrase&ntilde;a</label>
                <Field name="password" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Contrase&ntilde;a" />
                <ErrorMessage name="password" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const passwordConfirmElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.passwordConfirm || !errors.passwordConfirm)
        return (
            <div className="form-group">
                <label htmlFor="passwordConfirm">Confirmar Contrase&ntilde;a</label>
                <Field name="passwordConfirm" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Confirmar Contrase&ntilde;a" />
                <ErrorMessage name="passwordConfirm" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const typeElement = () => {
        return (
            <div className="form-group">
                <label htmlFor="type">Tipo de usuario</label>
                <Select<UserType> options={options} id="type" name="type"
                    getOptionLabel={(option: UserType) => option.name}
                    getOptionValue={(option: UserType) => option.id}
                    onChange={handleOptionChange}
                    value={type}
                />
            </div>
        )
    }

    const buttonElement = ({ isSubmitting }: FormikProps<CreateUserModel>) => {
        return (
            <div className="form-group">
                <ErrorMessage name="message" component="div" className="alert alert-danger" />
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting} >
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Registrar</span>
                </button>
            </div>
        )
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={CreateUserSchema}
                    onSubmit={async (request, helpers) => {
                        await register(request, helpers)
                    }}
                >
                    {(formik: FormikProps<CreateUserModel>) => {
                        return (
                            <Form>
                                {usernameElement(formik)}
                                {nameElement(formik)}
                                {emailElement(formik)}
                                {passwordElement(formik)}
                                {passwordConfirmElement(formik)}
                                {typeElement()}
                                {buttonElement(formik)}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Register