import { AddCourseStudentService } from './add-course-student.service';
import { AddCourseStudentUseCaseService } from './add-course-student-use-case.service';
import { DataModule } from 'src/data/data.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: AddCourseStudentService, useClass: AddCourseStudentUseCaseService }
    ],
    exports: [AddCourseStudentService]
})
export class AddCourseStudentModule { }
