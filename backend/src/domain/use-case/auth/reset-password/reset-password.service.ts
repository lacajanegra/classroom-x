import { ResetPasswordRequestModel } from 'src/domain/model/reset-password-request.model';

export abstract class ResetPasswordService {
    abstract execute(request: ResetPasswordRequestModel, userId: string): Promise<void>
}