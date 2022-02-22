import { ApiServiceModule } from '../service/api-service.module';
import { AuthController } from './auth.controller';
import { CourseController } from './course.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [
    DomainModule,
    GuardModule,
    ApiServiceModule
  ],
  controllers: [
    AuthController,
    CourseController,
    StudentController,
    TeacherController
  ]
})
export class ControllerModule { }
