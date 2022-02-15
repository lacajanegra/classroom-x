import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { CourseEntity } from "./course.entity"
import { UserEntity } from "./user.entity"

@Entity('course_teacher')
export class CourseTeacherEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "course_id" })
    courseId: string

    @Column({ name: "user_id" })
    userId: string

    @ManyToOne(() => UserEntity, user => user.courseTeachers, { eager: true })
    @JoinColumn({ name: "user_id" })
    user: UserEntity

    @ManyToOne(() => CourseEntity, role => role.courseTeachers, { eager: true })
    @JoinColumn({ name: "course_id" })
    course: CourseEntity

}