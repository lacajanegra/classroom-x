import { DataModule } from 'src/data/data.module';
import { GetCourseTeacherService } from './get-course-teacher.service';
import { GetCourseTeacherUseCaseService } from './get-course-teacher-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCourseTeacherService, useClass: GetCourseTeacherUseCaseService }
    ],
    exports: [GetCourseTeacherService]
})
export class GetCourseTeacherModule { }
