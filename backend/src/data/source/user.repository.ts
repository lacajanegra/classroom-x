import { UserEntity } from "../entity/user.entity";

export abstract class UserRepository {

    abstract createUser(username: string, name: string, email: string, expiration: Date, hash: string): Promise<UserEntity>

    abstract getUserByUsername(username: string): Promise<UserEntity>

    abstract getUserById(id: string): Promise<UserEntity>

    abstract updateUser(entity: UserEntity): Promise<void>
}