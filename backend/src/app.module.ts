import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.config.${process.env.NODE_ENV}`],
      validationSchema: configValidationSchema
    }),
    DomainModule,
    DataModule,
    ApiModule
  ]
})
export class AppModule { }
