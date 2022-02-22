import { DataModule } from 'src/data/data.module';
import { GetCoursesStudentService } from './get-courses-student.service';
import { GetCoursesStudentUseCaseService } from './get-courses-student-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesStudentService, useClass: GetCoursesStudentUseCaseService }
    ],
    exports: [GetCoursesStudentService]
})
export class GetCoursesStudentModule { }
