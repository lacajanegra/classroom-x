import './Form.css'

import CreateUserModel from '../model/create-user.model';
import ResetPasswordModel from '../model/reset-password.model';
import authService from "../services/auth.service";
import { useFormik, Form, Formik, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import userService from '../services/user.service';
import ResetPasswordSchema from '../model/reset-password.schema';

const ResetPassword: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const initialValues: ResetPasswordModel = {
        oldPassword: '',
        password: '',
        passwordConfirm: ''
    }

    const reset = (request: ResetPasswordModel) => {
        setLoading(true)
        authService.reset(request)
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
                    validationSchema={ResetPasswordSchema}
                    onSubmit={reset}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="oldPassword">Contrase&ntilde;a Actual</label>
                            <Field name="oldPassword" type="password" className="form-control" />
                            <ErrorMessage name="oldPassword" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">Nueva Contrase&ntilde;a</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Confirmar Nueva Contrase&ntilde;a</label>
                            <Field name="passwordConfirm" type="password" className="form-control" />
                            <ErrorMessage name="passwordConfirm" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={loading} >
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Cambiar</span>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default ResetPassword