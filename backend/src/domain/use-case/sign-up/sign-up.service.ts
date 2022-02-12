import { RoleEnum } from "src/domain/model/role.enum";
import { UserRequestModel } from "src/domain/model/user-request.model";

export abstract class SignUpService {
    abstract execute(request: UserRequestModel, role: RoleEnum): Promise<void>
}