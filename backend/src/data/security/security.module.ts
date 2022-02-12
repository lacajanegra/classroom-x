import { Module } from '@nestjs/common';
import { PasswordModule } from './password/password.module';
import { AccessTokenModule } from './access-token/access-token.module';
import { DatabaseModule } from '../source/database/database.module';
import { DataMapperModule } from '../mapper/data-mapper.module';

@Module({
  imports: [
    DatabaseModule,
    DataMapperModule,
    PasswordModule,
    AccessTokenModule
  ],
  exports: [PasswordModule, AccessTokenModule]
})
export class SecurityModule { }
