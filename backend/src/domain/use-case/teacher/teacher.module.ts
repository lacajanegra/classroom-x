import { AddCourseTeacherService } from './add-course/add-course-teacher.service';
import { AddCourseTeacherUseCaseService } from './add-course/add-course-teacher-use-case.service';
import { DataModule } from 'src/data/data.module';
import { GetCourseTeacherService } from './get-course/get-course-teacher.service';
import { GetCourseTeacherUseCaseService } from './get-course/get-course-teacher-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: AddCourseTeacherService, useClass: AddCourseTeacherUseCaseService },
        { provide: GetCourseTeacherService, useClass: GetCourseTeacherUseCaseService }
    ],
    exports: [
        AddCourseTeacherService,
        GetCourseTeacherService
    ]
})
export class TeacherModule { }
