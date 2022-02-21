import './Form.css'

import ResetPasswordModel from '../model/reset-password.model';
import authService from "../services/auth.service";
import { Form, Formik, Field, ErrorMessage, FormikHelpers, FormikState } from 'formik';
import { useNavigate } from 'react-router-dom';
import userService from '../services/user.service';
import ResetPasswordSchema from '../model/reset-password.schema';

const ResetPassword: React.FunctionComponent = () => {

    const navigate = useNavigate()

    const initialValues: ResetPasswordModel = {
        oldPassword: '',
        password: '',
        passwordConfirm: ''
    }

    const resetSuccess = () => {
        userService.clearUser()
        navigate("../login", { replace: true });
    }

    const reset = async (request: ResetPasswordModel, { setErrors }: FormikHelpers<ResetPasswordModel>) => {
        await authService.reset(request)
            .then(() => {
                resetSuccess()
            }).catch((error) => {
                setErrors({ oldPassword: 'No es posible cambiar la contraseña' })
            })
    }

    const oldPasswordElement = ({ errors, touched }: FormikState<ResetPasswordModel>) => {
        const hasError: boolean = !(!touched.oldPassword || !errors.oldPassword)
        return (
            <div className="form-group">
                <label htmlFor="oldPassword">Contrase&ntilde;a</label>
                <Field name="oldPassword" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Contrase&ntilde;a" />
                <ErrorMessage name="oldPassword" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const passwordElement = ({ errors, touched }: FormikState<ResetPasswordModel>) => {
        const hasError: boolean = !(!touched.password || !errors.password)
        return (
            <div className="form-group">
                <label htmlFor="password">Nueva Contrase&ntilde;a</label>
                <Field name="password" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Nueva Contrase&ntilde;a" />
                <ErrorMessage name="password" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const passwordConfirmElement = ({ errors, touched }: FormikState<ResetPasswordModel>) => {
        const hasError: boolean = !(!touched.passwordConfirm || !errors.passwordConfirm)
        return (
            <div className="form-group">
                <label htmlFor="passwordConfirm">Confirmar Contrase&ntilde;a</label>
                <Field name="passwordConfirm" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Confirmar Contrase&ntilde;a" />
                <ErrorMessage name="passwordConfirm" component="div" className={hasError ? 'invalid-feedback' : ''} />
            </div>
        )
    }

    const buttonElement = ({ isSubmitting }: FormikState<ResetPasswordModel>) => {
        return (
            <div className="form-group">
                <ErrorMessage name="message" component="div" className="alert alert-danger" />
                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting} >
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Cambiar</span>
                </button>
            </div>
        )
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={ResetPasswordSchema}
                    onSubmit={async (request, helpers) => {
                        await reset(request, helpers)
                    }}
                >
                    {(formik: FormikState<ResetPasswordModel>) => {
                        return (
                            <Form>
                                {oldPasswordElement(formik)}
                                {passwordElement(formik)}
                                {passwordConfirmElement(formik)}
                                {buttonElement(formik)}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassword