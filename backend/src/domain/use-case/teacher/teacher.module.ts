import { AddCourseTeacherModule } from './add-course/add-course-teacher.module';
import { GetCourseTeacherModule } from './get-course/get-course-teacher.module';
import { GetCoursesTeacherModule } from './get-courses/get-courses-teacher.module';
import { Module } from '@nestjs/common';
import { UpdateQualificationModule } from './update-qualification/update-qualification.module';

@Module({
    imports: [
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule,
        UpdateQualificationModule
    ],
    exports: [
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule,
        UpdateQualificationModule
    ]
})
export class TeacherModule { }
