import { RoleEntity } from "../entity/role.entity";
import { RoleEnum } from "src/domain/model/role.enum";

export abstract class RoleRepository {

    abstract getRoleByName(role: RoleEnum): Promise<RoleEntity>

    abstract getUsersByRole(role: RoleEnum): Promise<RoleEntity>

}