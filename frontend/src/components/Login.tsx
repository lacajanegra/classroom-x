import './Form.css'

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

import LoginModel from "../model/login.model";
import LoginSchema from '../model/login.schema';
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import UserModel from '../model/user.model';
import { AxiosResponse } from 'axios';
import userService from '../services/user.service';

const Login: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const initialValues: LoginModel = {
        username: '',
        password: ''
    }

    const navigate = useNavigate()

    console.log("por aqui pase")

    const login = (request: LoginModel, { setErrors, resetForm }: FormikHelpers<LoginModel>) => {
        setLoading(true)
        resetForm();
        authService.login(request)
            .then((response: AxiosResponse<UserModel>) => {
                userService.setUser(response.data)
                navigate("../home", { replace: true });
            }).catch((error) => {
                userService.clearUser()
                setErrors({ username: 'Credenciales no validas' })
            }).finally(() => {
                setLoading(false)
            })
    }

    return (

        <div className="col-md-12">
            <div className="card card-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    onSubmit={login}
                >
                    <Form>

                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <Field name="username" type="text" className="form-control" />
                            <ErrorMessage name="username" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contrase&ntilde;a</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={loading} >
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                            <ErrorMessage name="message" component="div" className="alert alert-danger" />
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login

