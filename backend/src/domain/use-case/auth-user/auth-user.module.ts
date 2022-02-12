import { Module } from '@nestjs/common';
import { GetAuthUserModule } from './get-auth-user/get-auth-user.module';

@Module({
  imports: [GetAuthUserModule],
  exports: [GetAuthUserModule]
})
export class AuthUserModule {}
