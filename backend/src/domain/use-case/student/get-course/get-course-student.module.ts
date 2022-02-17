import { DataModule } from 'src/data/data.module';
import { GetCourseStudentService } from './get-course-student.service';
import { GetCourseStudentUseCaseService } from './get-course-student-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCourseStudentService, useClass: GetCourseStudentUseCaseService }
    ],
    exports: [GetCourseStudentService]
})
export class GetCourseStudentModule { }
