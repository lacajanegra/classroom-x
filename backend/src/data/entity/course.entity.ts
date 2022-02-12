import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm"

import { UserEntity } from "./user.entity"

@Entity('course')
@Unique('course_unique_constraint', ['name', 'user'])
export class CourseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @ManyToOne(() => UserEntity, (user) => user.courses)
    user: UserEntity

}