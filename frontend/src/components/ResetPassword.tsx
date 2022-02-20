import './Form.css'

import CreateUserModel from '../model/create-user.model';
import ResetPasswordModel from '../model/reset-password.model';
import authService from "../services/auth.service";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import userService from '../services/user.service';

const ResetPassword: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const navigate = useNavigate()

    const initialValues: ResetPasswordModel = {
        password: '',
        newPassword: '',
        passwordConfirm: ''
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            reset(values)
        }
    })

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
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="password">Contrase&ntilde;a Actual</label>
                        <input id="password" name="password" type="password" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">Nueva Contrase&ntilde;a</label>
                        <input id="newPassword" name="newPassword" type="password" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.newPassword}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Confirmar Contrase&ntilde;a</label>
                        <input id="passwordConfirm" name="passwordConfirm" type="password" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirm}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading} >Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword