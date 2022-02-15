import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { Module } from '@nestjs/common';
import { SignInModule } from './sign-in/sign-in.module';
import { SignOutModule } from './sign-out/sign-out.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    SignUpModule,
    SignInModule,
    SignOutModule,
    AuthModule,
    CourseModule,
    TeacherModule,
    StudentModule
  ],
  exports: [
    SignUpModule,
    SignInModule,
    SignOutModule,
    AuthModule,
    CourseModule,
    TeacherModule,
    StudentModule
  ]
})
export class UseCaseModule { }
