import './Form.css'

import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps, } from 'formik';

import LoginModel from "../model/login.model";
import LoginSchema from '../model/login.schema';
import authService from "../services/auth.service";
import { Link, useNavigate } from 'react-router-dom'
import UserModel from '../model/user.model';
import { AxiosResponse } from 'axios';
import userService from '../services/user.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import FormGroup from './common/FormGroup';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Login: React.FunctionComponent = () => {

    const initialValues: LoginModel = {
        username: '',
        password: '',
        message: ''
    }

    const navigate = useNavigate()

    const loginSuccess = () => {
        navigate("/home", { replace: true });
    }

    const loginNeedReset = () => {
        navigate("/reset-password", { replace: true })
    }

    const login = async (request: LoginModel, { setErrors }: FormikHelpers<LoginModel>) => {
        await authService.login(request)
            .then((response: AxiosResponse<UserModel>) => {
                userService.setUser(response.data)
                if (userService.isExpired()) loginNeedReset()
                else loginSuccess()
            }).catch(() => {
                userService.clearUser()
                setErrors({ message: 'Credenciales no válidas' })
            })
    }

    const icon = () => {
        return (<div className="text-center mb-4">
            <FontAwesomeIcon icon={faUserCircle} size="5x" />
        </div>
        )
    }

    const usernameElement = ({ errors, touched }: FormikProps<LoginModel>) => {
        const hasError: boolean = !(!touched.username || !errors.username)
        return (
            <FormGroup
                icon={faUser}
                input={<Field id='username' name="username" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Usuario" />}
                error={<ErrorMessage name="username" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const passwordElement = ({ errors, touched }: FormikProps<LoginModel>) => {
        const hasError: boolean = !(!touched.password || !errors.password)
        return (
            <FormGroup
                icon={faLock}
                input={<Field id='password' name="password" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Contrase&ntilde;a" />}
                error={<ErrorMessage name="password" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const buttonElement = ({ isSubmitting }: FormikProps<LoginModel>) => {
        return (
            <div className="form-group">
                <ErrorMessage name="message" component="div" className="alert alert-danger" />
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting} >
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                </button>
                <div className="btn btn-link btn-sm float-right">
                    <Link to={"/register"}>Registro</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={LoginSchema}
                    onSubmit={async (request, helpers) => {
                        await login(request, helpers)
                    }}
                >
                    {(formik: FormikProps<LoginModel>) => {
                        return (
                            <Form>
                                {icon()}
                                {usernameElement(formik)}
                                {passwordElement(formik)}
                                {buttonElement(formik)}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Login

