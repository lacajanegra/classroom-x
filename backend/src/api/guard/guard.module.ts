import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthUserModule } from 'src/domain/use-case/auth-user/auth-user.module';
import { JwtGuard } from './jwt.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    ConfigModule,
    AuthUserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN')
        }
      })
    })
  ],
  providers: [JwtGuard, JwtStrategy, RolesGuard, AuthService],
  exports: [JwtGuard, JwtStrategy, RolesGuard, AuthService, PassportModule]
})
export class GuardModule { }
