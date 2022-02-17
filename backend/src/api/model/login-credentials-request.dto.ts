import { IsNotEmpty } from "class-validator"

export class LoginCredentialsRequestDto {
    
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}