import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { SignUpUseCaseService } from './sign-up-use-case.service';
import { SignUpService } from './sign-up.service';

@Module({
  imports: [DataModule],
  providers: [
    { provide: SignUpService, useClass: SignUpUseCaseService }
  ],
  exports: [SignUpService]
})
export class SignUpModule {}
