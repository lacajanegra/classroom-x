import { IsNotEmpty } from "class-validator"
import { Match } from "../decorator/match.decorator"
import { NotMatch } from "../decorator/not-match.decorator"
import { Password } from "../decorator/password.decorator"

export class ResetPasswordRequestDto {

    @IsNotEmpty()
    readonly oldPassword: string

    @IsNotEmpty()
    @Password()
    @NotMatch('oldPassword')
    readonly password: string

    @IsNotEmpty()
    @Match('password')
    readonly passwordConfirm: string;
}
