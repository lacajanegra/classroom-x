import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from 'src/config/jwt.config';
import { AccessTokenService } from './access-token.service';

@Module({
  imports: [JwtModule.register(JwtConfig)],
  providers: [AccessTokenService],
  exports: [AccessTokenService]
})
export class AccessTokenModule { }
