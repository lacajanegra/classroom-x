import { DataModule } from 'src/data/data.module';
import { GetTeachersService } from './get-teachers.service';
import { GetTeachersUseCaseService } from './get-teachers-use-case.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [DataModule],
    providers: [
        { provide: GetTeachersService, useClass: GetTeachersUseCaseService }
    ],
    exports: [GetTeachersService]
})
export class GetTeachersModule { }
