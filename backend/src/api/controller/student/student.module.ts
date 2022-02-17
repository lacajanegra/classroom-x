import { ApiMapperModule } from 'src/api/mapper/api-mapper.module';
import { DomainModule } from '../../../domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';

@Module({
  imports: [
    DomainModule,
    GuardModule,
    ApiMapperModule
  ],
  controllers: [StudentController]
})
export class StudentModule { }
