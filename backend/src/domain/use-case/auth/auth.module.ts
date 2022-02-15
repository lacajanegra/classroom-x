import { GetAuthUserModule } from './get-user/get-auth-user.module';
import { Module } from '@nestjs/common';
import { ResetPasswordModule } from './reset-password/reset-passord.module';

@Module({
  imports: [GetAuthUserModule, ResetPasswordModule],
  exports: [GetAuthUserModule, ResetPasswordModule]
})
export class AuthModule {}
