import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { CourseEntity } from "./course.entity"
import { CourseStudentEntity } from './course-student.entity';
import { UserEntity } from "./user.entity";

@Entity('course_teacher')
export class CourseTeacherEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "course_id" })
    courseId: string

    @Column({ name: "user_id" })
    userId: string

    @ManyToOne(() => CourseEntity, course => course.courseTeachers, { eager: true })
    @JoinColumn({ name: "course_id" })
    course: CourseEntity

    @ManyToOne(() => UserEntity, user => user.courseTeachers, { eager: true })
    @JoinColumn({ name: "user_id" })
    teacher: UserEntity

    @OneToMany(() => CourseStudentEntity, courseStudent => courseStudent.courseTeacher)
    courseStudents: CourseStudentEntity[]

}