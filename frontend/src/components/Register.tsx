import './Form.css'

import { ErrorMessage, Field, Form, Formik } from 'formik';

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

    const [loading, setLoading] = useState<boolean>(false)

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

    const register = (request: CreateUserModel) => {
        setLoading(true)
        const userType = type?.id || 'student'
        authService.register(request, userType)
            .then(() => {
                userService.clearUser()
                navigate("/login", { replace: true });
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (

        <div className="col-md-12">
            <div className="card card-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={CreateUserSchema}
                    onSubmit={register}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <Field name="username" type="text" className="form-control" />
                            <ErrorMessage name="username" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <Field name="email" type="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contrase&ntilde;a</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Confirmar Contrase&ntilde;a</label>
                            <Field name="passwordConfirm" type="password" className="form-control" />
                            <ErrorMessage name="passwordConfirm" component="div" className="alert alert-danger" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="type">Tipo de usuario</label>
                            <Select<UserType> options={options} id="type" name="type"
                                getOptionLabel={(option: UserType) => option.name}
                                getOptionValue={(option: UserType) => option.id}
                                onChange={handleOptionChange}
                                value={type}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={loading} >
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Registrar</span>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Register