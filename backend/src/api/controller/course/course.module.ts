import { AddCourseModule } from 'src/domain/use-case/course/add-course/add-course.module';
import { CourseController } from './course.controller';
import { DelCourseModule } from 'src/domain/use-case/course/del-course/del-course.module';
import { GetCourseModule } from 'src/domain/use-case/course/get-course/get-course.module';
import { GetCoursesModule } from 'src/domain/use-case/course/get-courses/get-courses.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';
import { UpdateCourseModule } from 'src/domain/use-case/course/update-course/update-course.module';

@Module({
  imports: [
    GetCourseModule,
    GetCoursesModule,
    AddCourseModule,
    UpdateCourseModule,
    DelCourseModule,
    GuardModule
  ],
  controllers: [CourseController]
})
export class CourseModule { }
