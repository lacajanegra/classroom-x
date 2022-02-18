import { ApiServiceModule } from '../../service/api-service.module';
import { AuthController } from './auth.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DomainModule,
    GuardModule,
    ApiServiceModule
  ],
  controllers: [AuthController]
})
export class AuthModule { }
