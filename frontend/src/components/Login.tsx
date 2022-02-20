import './Form.css'

import LoginModel from "../model/login.model";
import UserModel from '../model/user.model';
import authService from "../services/auth.service";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import userService from '../services/user.service';

const Login: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const initialValues: LoginModel = {
        username: '',
        password: ''
    }

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            login(values)
        }
    })

    const login = (request: LoginModel) => {
        setLoading(true)
        authService.login(request)
            .then((response: UserModel) => {
                userService.setUser(response)
                navigate("/home", { replace: true });
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
                        <label htmlFor="username">Usuario</label>
                        <input id="username" name="username" type="text" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contrase&ntilde;a</label>
                        <input id="password" name="password" type="password" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading} >Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login