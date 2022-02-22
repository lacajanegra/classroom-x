import { Module } from '@nestjs/common';
import { SignOutService } from './sign-out.service';
import { SignOutUseCaseService } from './sign-out-use-case.service';
import { DataModule } from 'src/data/data.module';

@Module({
  //imports: [DataModule],
  providers: [
    { provide: SignOutService, useClass: SignOutUseCaseService }
  ],
  exports: [SignOutService]

})
export class SignOutModule { }
