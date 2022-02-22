import { DataModule } from 'src/data/data.module';
import { Module } from '@nestjs/common';
import { ResetPasswordService } from './reset-password.service';
import { ResetPasswordUseCaseService } from './reset-password-use-case.service';

@Module({
  imports: [DataModule],
  providers: [
    { provide: ResetPasswordService, useClass: ResetPasswordUseCaseService }
  ],
  exports: [ResetPasswordService]
})
export class ResetPasswordModule { }
