import { Module } from '@nestjs/common';
import { SignInModule } from './sign-in/sign-in.module';
import { SignOutModule } from './sign-out/sign-out.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { CourseModule } from './course/course.module';
import { AuthUserModule } from './auth-user/auth-user.module';

@Module({
  imports: [SignUpModule, SignInModule, SignOutModule, AuthUserModule, CourseModule],
  exports: [SignUpModule, SignInModule, SignOutModule, AuthUserModule, CourseModule]
})
export class UseCaseModule {}
