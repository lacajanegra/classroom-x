import { Module } from '@nestjs/common';
import { BCryptModule } from './bcrypt/bcrypt.module';
import { Argon2Module } from './argon2/argon2.module';

@Module({
  imports: [
    ...(process.env.PASSWORD_PROVIDER === 'BCRYPT' ? [BCryptModule] : [Argon2Module])
  ],
  exports: [
    ...(process.env.PASSWORD_PROVIDER === 'BCRYPT' ? [BCryptModule] : [Argon2Module])    
  ]
})
export class PasswordModule { }
