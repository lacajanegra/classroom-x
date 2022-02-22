import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { UpdateCourseUseCaseService } from './update-course-use-case.service';
import { UpdateCourseService } from './update-course.service';
import { GetCourseModule } from '../get-course/get-course.module';

@Module({
    imports: [DataModule, GetCourseModule],
    providers: [
        { provide: UpdateCourseService, useClass: UpdateCourseUseCaseService }
    ],
    exports: [UpdateCourseService]
})
export class UpdateCourseModule { }
