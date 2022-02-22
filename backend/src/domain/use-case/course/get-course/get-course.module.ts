import { Module } from '@nestjs/common';
import { GetCourseService } from './get-course.service';
import { GetCourseUseCaseService } from './get-course-use-case.service';
import { DataModule } from 'src/data/data.module';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCourseService, useClass: GetCourseUseCaseService }
    ],
    exports: [GetCourseService]
})
export class GetCourseModule { }
