import { Module } from '@nestjs/common';
import { PasswordService } from '../password.service';
import { Argon2PasswordService } from './argon2-password.service';

@Module({
  providers: [
    { provide: PasswordService, useClass: Argon2PasswordService }
  ],
  exports: [PasswordService]
})
export class Argon2Module { }
