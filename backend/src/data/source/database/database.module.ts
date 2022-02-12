import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from 'src/config/database.config';
import { CourseRepository } from '../course.repository';
import { UserRepository } from '../user.repository';
import { DatabaseCourseRepository } from './database-course.repository';
import { DatabaseUserRepository } from './database-user.repository';
import { Connection } from 'typeorm';
import { CourseEntity } from '../../entity/course.entity';
import { UserEntity } from '../../entity/user.entity';
import { RoleEntity } from 'src/data/entity/role.entity';
import { RoleRepository } from '../role.repository';
import { DatabaseRoleRepository } from './database-role.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
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
