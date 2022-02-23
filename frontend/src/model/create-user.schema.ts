import * as Yup from 'yup';

import CreateUserModel from './create-user.model';

const CreateUserSchema: Yup.SchemaOf<CreateUserModel> = Yup.object().shape({
    username: Yup.string()
        .min(4, "Usuario debe tener al menos 4 caracteres")
        .max(20, "Usuario no debe ser mayor a 20 caracteres")
        .required("Usuario requirido")
        .matches(/^[a-zA-Z]+$/,"Usuario debe contener solo letras"),
    name: Yup.string()
        .min(4, "Nombre debe tener al menos 4 caracteres")
        .max(100, "Nombre no debe ser mayor a 100 caracteres")
        .required("Nombre requirido")
        .matches(/^[a-zA-Z ]+$/,"Nombre debe contener solo letras y espacios"),
    email: Yup.string()
        .max(100, "Correo no debe ser mayor a 100 caracteres")
        .email("No es un correo correcto")
        .required("Correo requirido"),
    password: Yup.string()
        .min(8, "Contraseña debe tener al menos 8 caracteres")
        .max(32, "Contraseña debe ser mayor a 32 caracteres")
        .required("Contraseña requerida")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&./])[A-Za-z\d./@$!%*#?&]{1,}$/,"Contraseña debe contener mayúsculas, minúsculas, números y símbolos [./@$!%*#?&]"),
    passwordConfirm: Yup.string()
        .required("Debe confirmar contraseña")
        .when('password', (password, field) => password ? field.required().oneOf([Yup.ref('password')], 'Ambas contraseñas deben coincidir') : field),
        message: Yup.string().optional()
})

export default CreateUserSchema