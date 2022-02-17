import { CreateUserModel } from "src/domain/model/create-user.model";
import { UserEntity } from "../entity/user.entity";

export abstract class UserRepository {

    abstract createUser(request: CreateUserModel, hash: string, expiration: Date): Promise<UserEntity>

    abstract getUserByUsername(username: string): Promise<UserEntity>

    abstract getUserById(id: string): Promise<UserEntity>

    abstract updateUser(entity: UserEntity): Promise<void>

}