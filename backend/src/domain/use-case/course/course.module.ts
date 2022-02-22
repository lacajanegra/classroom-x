import { Module } from '@nestjs/common';
import { GetCoursesModule } from './get-courses/get-courses.module';
import { UpdateCourseModule } from './update-course/update-course.module';
import { AddCourseModule } from './add-course/add-course.module';
import { GetCourseModule } from './get-course/get-course.module';
import { DelCourseModule } from './del-course/del-course.module';

@Module({
  imports: [GetCoursesModule, UpdateCourseModule, AddCourseModule, GetCourseModule, DelCourseModule],
  exports: [GetCoursesModule, UpdateCourseModule, AddCourseModule, GetCourseModule, DelCourseModule]
})
export class CourseModule {}
