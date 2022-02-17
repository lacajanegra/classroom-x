import { IsNotEmpty } from "class-validator"
import { Match } from "../decorator/match.decorator"
import { NotMatch } from "../decorator/not-match.decorator"
import { Password } from "../decorator/password.decorator"

export class ResetPasswordRequestDto {

    @IsNotEmpty()
    @Password()
    readonly password: string

    @IsNotEmpty()
    @Password()
    @NotMatch('password')
    readonly newPassword: string

    @IsNotEmpty()
    @Match('newPassword')
    readonly passwordConfirm: string;
}
