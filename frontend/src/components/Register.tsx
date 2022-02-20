import './Form.css'

import CreateUserModel from '../model/create-user.model';
import { OnChangeValue } from 'react-select';
import Select from 'react-select';
import UserType from '../model/user-type.model';
import authService from "../services/auth.service";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import userService from '../services/user.service';

const Register: React.FunctionComponent = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const [type, setType] = useState<UserType | null>()

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

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: values => {
            register(values)
        }
    })

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
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input id="username" name="username" type="text" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input id="name" name="name" type="text" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <input id="email" name="email" type="text" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
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
                        <label htmlFor="passwordConfirm">Confirmar Contrase&ntilde;a</label>
                        <input id="passwordConfirm" name="passwordConfirm" type="password" className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirm}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Tipo de usuario</label>
                        <Select<UserType> options={options} /*onChange={(values) => this.setValues(values)}*/ id="type" name="type" //className="form-control"
                            getOptionLabel={(option: UserType) => option.name}
                            getOptionValue={(option: UserType) => option.id}
                            placeholder="Seleccione un tipo"
                            onChange={handleOptionChange}
                            value={type}
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

export default Register