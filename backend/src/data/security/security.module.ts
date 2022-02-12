import { DataMapperModule } from '../mapper/data-mapper.module';
import { DatabaseModule } from '../source/database/database.module';
import { Module } from '@nestjs/common';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [
    DatabaseModule,
    DataMapperModule,
    PasswordModule
  ],
  exports: [PasswordModule]
})
export class SecurityModule { }
