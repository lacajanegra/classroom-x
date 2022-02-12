import { RoleEnum } from "src/domain/model/role.enum";
import { RoleEntity } from "../entity/role.entity";
import { UserEntity } from "../entity/user.entity";

export abstract class RoleRepository {

    abstract createRole(role: RoleEnum, user: UserEntity): Promise<RoleEntity>

}