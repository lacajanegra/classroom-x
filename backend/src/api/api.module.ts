import { ApiServiceModule } from './service/api-service.module';
import { ControllerModule } from './controller/controller.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ControllerModule,
        ApiServiceModule
    ]
})
export class ApiModule { }
