import { AddCourseStudentModule } from './add-course/add-course-student.module';
import { GetCourseStudentModule } from './get-course/get-course-student.module';
import { GetCoursesStudentModule } from './get-courses/get-courses-student.module';
import { GetCoursesToLearn } from './to-learn/get-courses-to-learn.module';
import { Module } from '@nestjs/common';
import { GetStudentsModule } from './get-students/get-students.module';

@Module({
  imports: [
    GetCoursesToLearn,
    GetCoursesStudentModule,
    AddCourseStudentModule,
    GetCourseStudentModule,
    GetStudentsModule
  ],
  exports: [
    GetCoursesToLearn,
    GetCoursesStudentModule,
    AddCourseStudentModule,
    GetCourseStudentModule,
    GetStudentsModule
  ]
})
export class StudentModule { }
