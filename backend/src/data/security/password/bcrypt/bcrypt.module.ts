import { Module } from '@nestjs/common';
import { PasswordService } from '../password.service';
import { BCryptPasswordService } from './bcrypt-password.service';

@Module({
  providers: [
    { provide: PasswordService, useClass: BCryptPasswordService }
  ],
  exports: [PasswordService]
})
export class BCryptModule { }
