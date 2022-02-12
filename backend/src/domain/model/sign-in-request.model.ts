import { IsEmail, IsNotEmpty } from "class-validator"

export class SignInRequestModel {
    
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}