import { ResetPasswordModel } from "src/domain/model/reset-password.model";

export abstract class ResetPasswordService {
    abstract execute(request: ResetPasswordModel, userId: string): Promise<void>
}