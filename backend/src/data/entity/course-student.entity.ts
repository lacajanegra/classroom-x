import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { CourseTeacherEntity } from "./course-teacher.entity"
import { UserEntity } from "./user.entity"

@Entity('course_student')
export class CourseStudentEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "course_teacher_id" })
    courseTeacherId: string

    @Column({ name: "user_id" })
    userId: string

    @Column({ name: "qualification" })
    qualification: number

    @ManyToOne(() => CourseTeacherEntity, courseTeacher => courseTeacher.courseStudents, { eager: true })
    @JoinColumn({ name: "course_teacher_id" })
    courseTeacher: CourseTeacherEntity

    @ManyToOne(() => UserEntity, user => user.courseStudents, { eager: true })
    @JoinColumn({ name: "user_id" })
    student: UserEntity

}