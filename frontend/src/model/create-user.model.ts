interface CreateUserModel {
    username: string
    name: string
    email: string
    password: string
    passwordConfirm: string
    message?: string
}

export default CreateUserModel