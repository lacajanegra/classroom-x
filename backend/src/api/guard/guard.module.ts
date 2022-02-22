import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from 'src/domain/use-case/auth/auth.module';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';
import { StatusGuard } from './status.guard';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
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
  providers: [JwtGuard, JwtStrategy, RolesGuard, StatusGuard, AuthService],
  exports: [JwtGuard, JwtStrategy, RolesGuard, StatusGuard, AuthService, PassportModule]
})
export class GuardModule { }
