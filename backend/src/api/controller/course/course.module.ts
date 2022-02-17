import { ApiMapperModule } from 'src/api/mapper/api-mapper.module';
import { CourseController } from './course.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DomainModule,
    GuardModule,
    ApiMapperModule
  ],
  controllers: [CourseController]
})
export class CourseModule { }
