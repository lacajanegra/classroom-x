import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    DomainModule,
    DataModule,
    ApiModule
  ]
})
export class AppModule { }
