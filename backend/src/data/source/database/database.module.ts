import { ConfigModule, ConfigService } from '@nestjs/config';

import { Connection } from 'typeorm';
import { CourseEntity } from '../../entity/course.entity';
import { CourseRepository } from '../course.repository';
import { DatabaseCourseRepository } from './database-course.repository';
import { DatabaseRoleRepository } from './database-role.repository';
import { DatabaseUserRepository } from './database-user.repository';
import { Module } from '@nestjs/common';
import { RoleEntity } from 'src/data/entity/role.entity';
import { RoleRepository } from '../role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { UserRepository } from '../user.repository';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_NAME'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS')
      }),
    }),
    TypeOrmModule.forFeature([CourseEntity, UserEntity, RoleEntity])
  ],
  providers: [
    { provide: CourseRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseCourseRepository), inject: [Connection] },
    { provide: RoleRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseRoleRepository), inject: [Connection] },
    { provide: UserRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseUserRepository), inject: [Connection] }
  ],
  exports: [CourseRepository, UserRepository, RoleRepository]
})
export class DatabaseModule { }
