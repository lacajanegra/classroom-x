import { AddCourseTeacherModule } from './add-course/add-course-teacher.module';
import { GetCourseTeacherModule } from './get-course/get-course-teacher.module';
import { GetCoursesTeacherModule } from './get-courses/get-courses-teacher.module';
import { Module } from '@nestjs/common';
import { UpdateQualificationModule } from './update-qualification/update-qualification.module';
import { GetTeachersModule } from './get-teachers/get-teachers.module';
import { GetCoursesToTeachModule } from './to-teach/get-courses-to-teach.module';

@Module({
    imports: [
        GetCoursesToTeachModule,
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule,
        UpdateQualificationModule,
        GetTeachersModule
    ],
    exports: [
        GetCoursesToTeachModule,
        AddCourseTeacherModule,
        GetCourseTeacherModule,
        GetCoursesTeacherModule,
        UpdateQualificationModule,
        GetTeachersModule
    ]
})
export class TeacherModule { }
