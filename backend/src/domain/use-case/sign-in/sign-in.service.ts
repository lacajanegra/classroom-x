import { LoginModel } from "src/domain/model/login.model";
import { UserModel } from "src/domain/model/user.model";

export abstract class SignInService {
    abstract execute(request: LoginModel): Promise<UserModel>
}