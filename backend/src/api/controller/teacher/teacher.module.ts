import { DomainModule } from '../../../domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [
    DomainModule,
    GuardModule
  ],
  controllers: [TeacherController]
})
export class TeacherModule { }
