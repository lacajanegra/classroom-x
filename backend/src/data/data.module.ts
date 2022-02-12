import { Module } from '@nestjs/common';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { AddCourseRepository } from 'src/domain/repository/add-course.repository';
import { DataAddCourseRepository } from './data-add-course.repository';
import { DataMapperModule } from './mapper/data-mapper.module';
import { DataGetCourseRepository } from './data-get-course.repository';
import { GetCoursesRepository } from 'src/domain/repository/get-courses.repository';
import { DelCourseRepository } from 'src/domain/repository/del-course.repository';
import { DataGetCoursesRepository } from './data-get-courses.repository';
import { DataDelCourseRepository } from './data-del-course.repository';
import { UpdateCourseRepository } from 'src/domain/repository/update-course.repository';
import { DataUpdateCourseRepository } from './data-update-course.repository';
import { SignInRepository } from 'src/domain/repository/sign-in.repository';
import { AddUserRepository } from '../domain/repository/add-user.repository';
import { DataSignInRepository } from './data-sign-in.repository';
import { DataAddUserRepository } from './data-add-user.repository';
import { SecurityModule } from './security/security.module';
import { SourceModule } from './source/source.module';
import { GetUserRepository } from 'src/domain/repository/get-user.repository';
import { DataGetUserRepository } from './data-get-user.repository';

@Module({
    imports: [
        SourceModule,
        DataMapperModule,
        SecurityModule
    ],
    providers: [
        { provide: AddCourseRepository, useClass: DataAddCourseRepository },
        { provide: GetCourseRepository, useClass: DataGetCourseRepository },
        { provide: GetCoursesRepository, useClass: DataGetCoursesRepository },
        { provide: DelCourseRepository, useClass: DataDelCourseRepository },
        { provide: UpdateCourseRepository, useClass: DataUpdateCourseRepository },
        { provide: SignInRepository, useClass: DataSignInRepository },
        { provide: AddUserRepository, useClass: DataAddUserRepository },
        { provide: GetUserRepository, useClass: DataGetUserRepository }
    ],
    exports: [
        AddCourseRepository,
        GetCourseRepository,
        GetCoursesRepository,
        DelCourseRepository,
        UpdateCourseRepository,
        SignInRepository,
        AddUserRepository,
        GetUserRepository
    ]
})
export class DataModule { }
