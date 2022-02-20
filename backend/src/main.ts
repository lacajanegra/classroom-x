import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('MainApplication')
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get('NODE_PORT')
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(port);
  logger.log(`The application listening on port ${port}.`)
}

bootstrap();
