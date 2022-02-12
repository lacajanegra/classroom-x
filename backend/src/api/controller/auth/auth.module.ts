import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SignInModule } from 'src/domain/use-case/sign-in/sign-in.module';
import { SignOutModule } from 'src/domain/use-case/sign-out/sign-out.module';
import { SignUpModule } from 'src/domain/use-case/sign-up/sign-up.module';

@Module({
  imports: [
    SignUpModule,
    SignInModule,
    SignOutModule
  ],
  controllers: [AuthController]
})
export class AuthModule { }
