import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { SignInUseCaseService } from './sign-in-use-case.service';
import { SignInService } from './sign-in.service';

@Module({
  imports: [DataModule],
  providers: [
    { provide: SignInService, useClass: SignInUseCaseService }
  ],
  exports: [SignInService]
})
export class SignInModule { }
