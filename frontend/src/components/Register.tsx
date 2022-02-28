import './Form.css'

import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from 'formik';

import CreateUserModel from '../model/create-user.model';
import CreateUserSchema from '../model/create-user.schema';
import UserType from '../model/user-type.model';
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import userService from '../services/user.service';
import { faAt, faIdCard, faUser, faLock, faUsers } from '@fortawesome/free-solid-svg-icons';
import FormGroup from './common/FormGroup';

const Register: React.FunctionComponent = () => {

    const navigate = useNavigate()

    const options: UserType[] = [
        { id: "", name: "Tipo" },
        { id: "student", name: "Estudiante" },
        { id: "teacher", name: "Profesor" }
    ]

    const initialValues: CreateUserModel = {
        username: '',
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        type: ''
    }

    const registerSuccess = () => {
        userService.clearUser()
        navigate("../login", { replace: true });
    }

    const register = async (request: CreateUserModel, { setErrors }: FormikHelpers<CreateUserModel>) => {
        await authService.register(request, request.type)
            .then(() => {
                registerSuccess()
            }).catch(() => {
                setErrors({ username: 'Usuario ya existe' })
            })
    }

    const usernameElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.username || !errors.username)
        return (
            <FormGroup
                icon={faUser}
                input={<Field name="username" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Usuario" />}
                error={<ErrorMessage name="username" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const nameElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.name || !errors.name)
        return (
            <FormGroup
                icon={faIdCard}
                input={<Field name="name" type="text" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Nombre" />}
                error={<ErrorMessage name="name" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const emailElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.email || !errors.email)
        return (
            <FormGroup
                icon={faAt}
                input={<Field name="email" type="email" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Correo" />}
                error={<ErrorMessage name="email" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const passwordElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.password || !errors.password)
        return (
            <FormGroup
                icon={faLock}
                input={<Field name="password" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Contrase&ntilde;a" />}
                error={<ErrorMessage name="password" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const passwordConfirmElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.passwordConfirm || !errors.passwordConfirm)
        return (
            <FormGroup
                icon={faLock}
                input={<Field name="passwordConfirm" type="password" className={hasError ? 'form-control is-invalid' : 'form-control'} placeholder="Confirmar Contrase&ntilde;a" />}
                error={<ErrorMessage name="passwordConfirm" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
        )
    }

    const typeElement = ({ errors, touched }: FormikProps<CreateUserModel>) => {
        const hasError: boolean = !(!touched.type || !errors.type)
        return (
            <FormGroup
                icon={faUsers}
                input={<Field as="select" name="type" className={hasError ? 'custom-select is-invalid' : 'custom-select'}>
                    {options.map((option) => (<option key={option.id} value={option.id} label={option.name} />))}
                </Field>}
                error={<ErrorMessage name="type" component="div" className={hasError ? 'invalid-feedback' : ''} />}
            />
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
                                {typeElement(formik)}
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