import { Module } from '@nestjs/common';
import { DelCourseService } from './del-course.service';
import { DelCourseUseCaseService } from './del-course-use-case.service';
import { DataModule } from 'src/data/data.module';

@Module({
    imports: [DataModule],
    providers: [
        { provide: DelCourseService, useClass: DelCourseUseCaseService }
    ],
    exports: [DelCourseService]
})
export class DelCourseModule { }
