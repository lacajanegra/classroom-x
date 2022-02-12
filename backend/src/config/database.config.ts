import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const DatabaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'classroom',
    password: process.env.DB_PASS || 'classroom',
    autoLoadEntities: true,
    synchronize: true
}