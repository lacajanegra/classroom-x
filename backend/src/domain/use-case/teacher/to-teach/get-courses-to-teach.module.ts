import { DataModule } from 'src/data/data.module';
import { Module } from '@nestjs/common';
import { GetCoursesToTeachUseCaseService } from './get-courses-to-teach-use-case.service';
import { GetCoursesToTeachService } from './get-courses-to-teach.service';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesToTeachService, useClass: GetCoursesToTeachUseCaseService }
    ],
    exports: [GetCoursesToTeachService]
})
export class GetCoursesToTeachModule { }
