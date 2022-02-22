import { DataModule } from 'src/data/data.module';
import { GetStudentsService } from './get-students.service';
import { GetStudentsUseCaseService } from './get-students-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetStudentsService, useClass: GetStudentsUseCaseService }
    ],
    exports: [GetStudentsService]
})
export class GetStudentsModule { }
