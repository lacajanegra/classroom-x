import * as Yup from 'yup';

import ResetPasswordModel from './reset-password.model';

const ResetPasswordSchema: Yup.SchemaOf<ResetPasswordModel> = Yup.object().shape({
    oldPassword: Yup.string().required("Contraseña actual requerida"),
    password: Yup.string()
        .min(8, "Nueva contraseña debe tener al menos 8 caracteres")
        .max(32, "Nueva contraseña no debe ser mayor a 32 caracteres")
        .required("Nueva contraseña requerida")
        .when('oldPassword', (oldPassword, field) => oldPassword ? field.required().test({ test: (newPassword: string) => newPassword !== oldPassword, message: 'Nueva contraseña debe ser diferente a la actual' }) : field)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&./])[A-Za-z\d./@$!%*#?&]{1,}$/,"Contraseña debe contener mayúsculas, minúsculas, números y símbolos [./@$!%*#?&]"),
    passwordConfirm: Yup.string()
        .required("Debe confirmar nueva contraseña")
        .when('newPassword', (newPassword, field) => newPassword ? field.required().oneOf([Yup.ref('newPassword')], 'Ambas contraseñas deben coincidir') : field)
});

export default ResetPasswordSchema