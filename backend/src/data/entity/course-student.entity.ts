import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { CourseEntity } from "./course.entity"
import { UserEntity } from "./user.entity"

@Entity('course_student')
export class CourseStudentEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "course_id" })
    courseId: string

    @Column({ name: "user_id" })
    userId: string

    @Column({ name: "qualification" })
    qualification: number

    @ManyToOne(() => UserEntity, user => user.courseStudents, { eager: true })
    @JoinColumn({ name: "user_id" })
    user: UserEntity

    @ManyToOne(() => CourseEntity, role => role.courseStudents, { eager: true })
    @JoinColumn({ name: "course_id" })
    course: CourseEntity

}