import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { GetAuthUserService } from './get-auth-user.service';
import { GetAuthUserUseCaseService } from './get-auth-user-use-case.service';

@Module({
  imports: [DataModule],
  providers: [
      { provide: GetAuthUserService, useClass: GetAuthUserUseCaseService }
  ],
  exports: [GetAuthUserService]
})
export class GetAuthUserModule {}
