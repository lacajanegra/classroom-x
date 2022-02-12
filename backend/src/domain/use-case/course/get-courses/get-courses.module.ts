import { Module } from '@nestjs/common';
import { GetCoursesService } from './get-courses.service';
import { GetCoursesUseCaseService } from './get-courses-use-case.service';
import { DataModule } from 'src/data/data.module';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesService, useClass: GetCoursesUseCaseService }
    ],
    exports: [GetCoursesService]
})
export class GetCoursesModule { }
