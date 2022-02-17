import { CreateUserModel } from '../model/create-user.model';

export abstract class AddUserRepository {
    abstract addUser(request: CreateUserModel, hash: string): Promise<void>
}