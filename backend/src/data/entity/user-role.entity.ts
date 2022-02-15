import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

@Entity('user_role')
export class UserRoleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "role_id" })
    roleId: string

    @Column({ name: "user_id" })
    userId: string

    @ManyToOne(() => UserEntity, user => user.userRoles, { eager: true })
    @JoinColumn({ name: "user_id" })
    user: UserEntity

    @ManyToOne(() => RoleEntity, role => role.userRoles, { eager: true })
    @JoinColumn({ name: "role_id" })
    role: RoleEntity
}