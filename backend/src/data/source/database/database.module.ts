import { ConfigModule, ConfigService } from '@nestjs/config';
import { Connection, ConnectionOptions, getConnectionOptions } from 'typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { CourseEntity } from '../../entity/course.entity';
import { CourseRepository } from '../course.repository';
import { CourseStudentEntity } from '../../entity/course-student.entity';
import { CourseStudentRepository } from '../course-student.repository';
import { CourseTeacherEntity } from 'src/data/entity/course-teacher.entity';
import { CourseTeacherRepository } from '../course-teacher.repository';
import { DatabaseCourseRepository } from './database-course.repository';
import { DatabaseCourseStudentRepository } from './database-course-student.repository';
import { DatabaseCourseTeacherRepository } from './database-course-teacher.repository';
import { DatabaseRoleRepository } from './database-role.repository';
import { DatabaseUserRepository } from './database-user.repository';
import { DatabaseUserRoleRepository } from './database-user-role.repository';
import { Module } from '@nestjs/common';
import { RoleEntity } from 'src/data/entity/role.entity';
import { RoleRepository } from '../role.repository';
import { UserEntity } from '../../entity/user.entity';
import { UserRepository } from '../user.repository';
import { UserRoleEntity } from 'src/data/entity/user-role.entity';
import { UserRoleRepository } from '../user-role.repository';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const hasSsl = configService.get("DB_SSL") === 'true'
        const fullUrl = configService.get("DATABASE_URL") || undefined
        const connectionOptions: TypeOrmModuleOptions = {
          ssl: hasSsl,
          extra: {
            ssl: hasSsl ? { rejectUnauthorized: false } : null
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: false
        }

        if (fullUrl) {
          Object.assign(connectionOptions, { url: fullUrl });
        } else {
          Object.assign(connectionOptions, { host: configService.get('DB_HOST') })
          Object.assign(connectionOptions, { port: configService.get('DB_PORT') })
          Object.assign(connectionOptions, { database: configService.get('DB_NAME') })
          Object.assign(connectionOptions, { username: configService.get('DB_USER') })
          Object.assign(connectionOptions, { password: configService.get('DB_PASS') })
        }

        return connectionOptions
      },
    }),
    TypeOrmModule.forFeature([CourseEntity, CourseStudentEntity, CourseTeacherEntity, UserEntity, RoleEntity, UserRoleEntity])
  ],
  providers: [
    { provide: CourseRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseCourseRepository), inject: [Connection] },
    { provide: RoleRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseRoleRepository), inject: [Connection] },
    { provide: UserRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseUserRepository), inject: [Connection] },
    { provide: UserRoleRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseUserRoleRepository), inject: [Connection] },
    { provide: CourseTeacherRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseCourseTeacherRepository), inject: [Connection] },
    { provide: CourseStudentRepository, useFactory: (connection: Connection) => connection.getCustomRepository(DatabaseCourseStudentRepository), inject: [Connection] }
  ],
  exports: [
    CourseRepository,
    UserRepository,
    RoleRepository,
    UserRoleRepository,
    CourseTeacherRepository,
    CourseStudentRepository
  ]
})
export class DatabaseModule { }
