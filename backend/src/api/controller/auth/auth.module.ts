import { AuthController } from './auth.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DomainModule,
    GuardModule
  ],
  controllers: [AuthController]
})
export class AuthModule { }
