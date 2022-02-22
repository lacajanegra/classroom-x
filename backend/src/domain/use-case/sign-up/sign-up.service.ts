import { CreateUserModel } from "src/domain/model/create-user.model";

export abstract class SignUpService {
    abstract execute(request: CreateUserModel): Promise<void>
}