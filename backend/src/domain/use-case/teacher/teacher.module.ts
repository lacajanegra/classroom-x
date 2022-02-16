import { AddCourseTeacherModule } from './add-course/add-course-teacher.module';
import { GetCourseTeacherModule } from './get-course/get-course-teacher.module';
import { GetCoursesTeacherModule } from './get-courses/get-courses-teacher.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule
    ],
    exports: [
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule
    ]
})
export class TeacherModule { }
