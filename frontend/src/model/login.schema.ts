import * as Yup from 'yup';

import LoginModel from "./login.model";

const LoginSchema : Yup.SchemaOf<LoginModel> = Yup.object().shape({
    username: Yup.string().required("Usuario requirido"),
    password: Yup.string().required("Contraseña requerida"),
    message: Yup.string().optional()
});

export default LoginSchema