import { AddCourseStudentModule } from './add-course/add-course-student.module';
import { GetCourseStudentModule } from './get-course/get-course-student.module';
import { GetCoursesStudentModule } from './get-courses/get-courses-student.module';
import { GetCoursesTeachersModule } from './get-courses-teachers/get-courses-teachers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    GetCoursesStudentModule,
    GetCoursesTeachersModule,
    AddCourseStudentModule,
    GetCourseStudentModule
  ],
  exports: [
    GetCoursesStudentModule,
    GetCoursesTeachersModule,
    AddCourseStudentModule,
    GetCourseStudentModule
  ]
})
export class StudentModule { }
