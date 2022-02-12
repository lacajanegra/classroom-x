import { AuthUserModule } from 'src/domain/use-case/auth-user/auth-user.module';
import { JwtGuard } from './jwt.guard';
import { JwtPassportConfig } from 'src/config/jwt.config';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    AuthUserModule,
    PassportModule.register(JwtPassportConfig)
  ],
  providers: [JwtGuard, JwtStrategy, RolesGuard],
  exports: [JwtGuard, JwtStrategy, RolesGuard, PassportModule]
})
export class GuardModule { }
