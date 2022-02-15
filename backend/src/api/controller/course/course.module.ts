import { CourseController } from './course.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DomainModule,
    GuardModule
  ],
  controllers: [CourseController]
})
export class CourseModule { }
