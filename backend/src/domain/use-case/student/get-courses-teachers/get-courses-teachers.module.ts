import { DataModule } from 'src/data/data.module';
import { GetCoursesTeachersService } from './get-courses-teachers.service';
import { GetCoursesTeachersUseCaseService } from './get-courses-teachers-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesTeachersService, useClass: GetCoursesTeachersUseCaseService }
    ],
    exports: [GetCoursesTeachersService]
})
export class GetCoursesTeachersModule { }
