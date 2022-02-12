import { Module } from '@nestjs/common';
import { AddCourseService } from './add-course.service';
import { AddCourseUseCaseService } from './add-course-use-case.service';
import { DataModule } from 'src/data/data.module';

@Module({
    imports: [DataModule],
    providers: [
        { provide: AddCourseService, useClass: AddCourseUseCaseService }
    ],
    exports: [AddCourseService]
})
export class AddCourseModule { }
