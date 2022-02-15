import { RoleEnum } from '../model/role.enum';
import { UserRequestModel } from '../model/user-request.model';

export abstract class AddUserRepository {
    abstract addUser(request: UserRequestModel, role: RoleEnum, hash: string): Promise<void>
}