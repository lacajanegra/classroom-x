import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { CourseEntity } from './course.entity';
import { RoleEntity } from './role.entity';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    @OneToMany(() => RoleEntity, (role) => role.user)
    roles: RoleEntity[]

    @OneToMany(() => CourseEntity, (course) => course.user)
    courses: CourseEntity[]
}