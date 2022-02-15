import { UserEntity } from "../entity/user.entity";
import { UserRequestModel } from "src/domain/model/user-request.model";

export abstract class UserRepository {

    abstract createUser(request: UserRequestModel, expiration: Date, hash: string): Promise<UserEntity>

    abstract getUserByUsername(username: string): Promise<UserEntity>

    abstract getUserById(id: string): Promise<UserEntity>

    abstract updateUser(entity: UserEntity): Promise<void>
}