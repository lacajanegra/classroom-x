import { SignInRequestModel } from "src/domain/model/sign-in-request.model";
import { UserModel } from "src/domain/model/user.model";

export abstract class SignInService {
    abstract execute(request: SignInRequestModel): Promise<UserModel>
}