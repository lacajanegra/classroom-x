import { DataModule } from 'src/data/data.module';
import { GetCourseTeacherModule } from '../get-course/get-course-teacher.module';
import { Module } from '@nestjs/common';
import { UpdateQualificationService } from './update-qualification.service';
import { UpdateQualificationUseCaseService } from './update-qualification-use-case.service';

@Module({
    imports: [DataModule, GetCourseTeacherModule],
    providers: [
        { provide: UpdateQualificationService, useClass: UpdateQualificationUseCaseService }
    ],
    exports: [UpdateQualificationService]
})
export class UpdateQualificationModule { }
