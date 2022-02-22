import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { RoleEnum } from 'src/domain/model/role.enum';
import { UserRoleEntity } from './user-role.entity';

@Entity('role')
export class RoleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "name", enum: RoleEnum })
    name: RoleEnum

    @OneToMany(() => UserRoleEntity, userRole => userRole.role)
    userRoles: UserRoleEntity[]

}