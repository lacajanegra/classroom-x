import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from 'src/api/guard/guard.module';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [
    DomainModule,
    GuardModule
  ],
  controllers: [UserController]
})
export class UserModule { }
