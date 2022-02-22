import { DataModule } from 'src/data/data.module';
import { GetCoursesTeacherService } from './get-courses-teacher.service';
import { GetCoursesTeacherUseCaseService } from './get-courses-teacher-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesTeacherService, useClass: GetCoursesTeacherUseCaseService }
    ],
    exports: [GetCoursesTeacherService]
})
export class GetCoursesTeacherModule { }
