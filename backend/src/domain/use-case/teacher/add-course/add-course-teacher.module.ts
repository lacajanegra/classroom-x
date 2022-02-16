import { AddCourseTeacherService } from './add-course-teacher.service';
import { AddCourseTeacherUseCaseService } from './add-course-teacher-use-case.service';
import { DataModule } from 'src/data/data.module';
import { GetCourseTeacherModule } from '../get-course/get-course-teacher.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule, GetCourseTeacherModule],
    providers: [
        { provide: AddCourseTeacherService, useClass: AddCourseTeacherUseCaseService }
    ],
    exports: [AddCourseTeacherService]
})
export class AddCourseTeacherModule { }
