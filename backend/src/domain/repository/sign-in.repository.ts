import { SignInRequestModel } from '../model/sign-in-request.model';
import { UserModel } from 'src/domain/model/user.model';

export abstract class SignInRepository {
    abstract signIn(request: SignInRequestModel): Promise<UserModel>
}