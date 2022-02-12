import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm"

import { RoleEnum } from '../../domain/model/role.enum';
import { UserEntity } from './user.entity';

@Entity('role')
@Unique('role_unique_constraint', ['name', 'user'])
export class RoleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false, enum: RoleEnum })
    name: RoleEnum

    @ManyToOne(() => UserEntity, (user) => user.roles)
    user: UserEntity
}