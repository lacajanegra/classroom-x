import { DataModule } from 'src/data/data.module';
import { Module } from '@nestjs/common';
import { GetCoursesToLearnService } from './get-courses-to-learn.service';
import { GetCoursesToLearnUseCaseService } from './get-courses-to-learn-use-case.service';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetCoursesToLearnService, useClass: GetCoursesToLearnUseCaseService }
    ],
    exports: [GetCoursesToLearnService]
})
export class GetCoursesToLearn { }
