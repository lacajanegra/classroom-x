export abstract class UserRoleRepository {

    abstract addRelation(roleId: string, userId: string): Promise<void>

}