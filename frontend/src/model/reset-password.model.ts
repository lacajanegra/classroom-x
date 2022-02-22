interface ResetPasswordModel {
    oldPassword: string
    password: string
    passwordConfirm: string
    message?: string
}

export default ResetPasswordModel