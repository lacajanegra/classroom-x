import { SignInRequestModel } from '../model/sign-in-request.model';
import { SignInResponseModel } from '../model/sign-in-response.model';

export abstract class SignInRepository {
    abstract signIn(request: SignInRequestModel): Promise<SignInResponseModel>
}