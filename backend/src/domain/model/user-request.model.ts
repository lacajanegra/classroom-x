import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

import { } from "password-validator"
import { Match } from "../decorator/match.decorator"
import { Password } from "../decorator/password.decorator"

export class UserRequestModel {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    name: string

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email: string

    @IsNotEmpty()
    @Password()
    password: string

    @IsNotEmpty()
    @Match('password')
    passwordConfirm: string;
}
