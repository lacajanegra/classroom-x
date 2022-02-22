import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

import { Match } from "../decorator/match.decorator"
import { Password } from "../decorator/password.decorator"

export class CreateUserRequestDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly username: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    readonly name: string

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    readonly email: string

    @IsNotEmpty()
    @Password()
    readonly password: string

    @IsNotEmpty()
    @Match('password')
    readonly passwordConfirm: string;
}
