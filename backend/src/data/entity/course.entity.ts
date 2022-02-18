import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { CourseStudentEntity } from "./course-student.entity"
import { CourseTeacherEntity } from "./course-teacher.entity"

@Entity('course')
export class CourseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "name" })
    name: string

    @OneToMany(() => CourseTeacherEntity, courseTeacher => courseTeacher.course)
    courseTeachers: CourseTeacherEntity[]

    @OneToMany(() => CourseStudentEntity, courseStudent => courseStudent.course)
    courseStudents: CourseStudentEntity[]

}