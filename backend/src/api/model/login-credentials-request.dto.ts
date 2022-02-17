import { IsNotEmpty } from "class-validator"

export class LoginCredentialsRequestDto {
    
    @IsNotEmpty()
    readonly username: string

    @IsNotEmpty()
    readonly password: string
}