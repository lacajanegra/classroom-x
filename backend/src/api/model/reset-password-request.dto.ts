import { IsNotEmpty } from "class-validator"
import { Match } from "../decorator/match.decorator"
import { NotMatch } from "../decorator/not-match.decorator"
import { Password } from "../decorator/password.decorator"

export class ResetPasswordRequestDto {

    @IsNotEmpty()
    @Password()
    password: string

    @IsNotEmpty()
    @Password()
    @NotMatch('password')
    newPassword: string

    @IsNotEmpty()
    @Match('newPassword')
    passwordConfirm: string;
}
