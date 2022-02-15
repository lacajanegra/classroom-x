import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CourseStudentEntity } from './course-student.entity';
import { CourseTeacherEntity } from './course-teacher.entity';
import { UserRoleEntity } from './user-role.entity';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: "username" })
    username: string

    @Column({ name: "name" })
    name: string

    @Column({ name: "email" })
    email: string

    @Column({ name: "password" })
    password: string

    @Column({ type: 'timestamptz' })
    expiration: Date

    @OneToMany(() => UserRoleEntity, userRole => userRole.user)
    userRoles: UserRoleEntity[]

    @OneToMany(() => CourseStudentEntity, courseStudent => courseStudent.user)
    courseStudents: CourseStudentEntity[]

    @OneToMany(() => CourseTeacherEntity, courseTeacher => courseTeacher.user)
    courseTeachers: CourseTeacherEntity[]

}