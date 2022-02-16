import { AddCourseRepository } from 'src/domain/repository/add-course.repository';
import { AddCourseStudentRepository } from 'src/domain/repository/add-course-student.repository';
import { AddCourseTeacherRepository } from 'src/domain/repository/add-course-teacher.repository';
import { AddUserRepository } from '../domain/repository/add-user.repository';
import { DataAddCourseRepository } from './data-add-course.repository';
import { DataAddCourseStudentRepository } from './data-add-course-student.repository';
import { DataAddCourseTeacherRepository } from './data-add-course-teacher.repository';
import { DataAddUserRepository } from './data-add-user.repository';
import { DataDelCourseRepository } from './data-del-course.repository';
import { DataGetCourseRepository } from './data-get-course.repository';
import { DataGetCourseStudentRepository } from './data-get-course-student.repository';
import { DataGetCourseTeacherRepository } from './data-get-course-teacher.repository';
import { DataGetCoursesRepository } from './data-get-courses.repository';
import { DataGetCoursesStudentRepository } from './data-get-courses-student.repository';
import { DataGetCoursesTeacherRepository } from './data-get-courses-teacher.repository';
import { DataGetUserRepository } from './data-get-user.repository';
import { DataMapperModule } from './mapper/data-mapper.module';
import { DataPasswordRepository } from './data-password.repository';
import { DataUpdateCourseRepository } from './data-update-course.repository';
import { DataUpdatePasswordRepository } from './data-update-password.repository';
import { DelCourseRepository } from 'src/domain/repository/del-course.repository';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { GetCourseTeacherRepository } from 'src/domain/repository/get-course-teacher.repository';
import { GetCoursesRepository } from 'src/domain/repository/get-courses.repository';
import { GetCoursesStudentRepository } from 'src/domain/repository/get-courses-student.repository';
import { GetCoursesTeacherRepository } from 'src/domain/repository/get-courses-teacher.repository';
import { GetUserRepository } from 'src/domain/repository/get-user.repository';
import { Module } from '@nestjs/common';
import { PasswordRepository } from 'src/domain/repository/password.repository';
import { SourceModule } from './source/source.module';
import { UpdateCourseRepository } from 'src/domain/repository/update-course.repository';
import { UpdatePasswordRepository } from '../domain/repository/update-password.repository';
import { UtilModule } from './util/util.module';

@Module({
    imports: [
        UtilModule,
        SourceModule,
        DataMapperModule
    ],
    providers: [
        { provide: AddCourseRepository, useClass: DataAddCourseRepository },
        { provide: GetCourseRepository, useClass: DataGetCourseRepository },
        { provide: GetCoursesRepository, useClass: DataGetCoursesRepository },
        { provide: DelCourseRepository, useClass: DataDelCourseRepository },
        { provide: UpdateCourseRepository, useClass: DataUpdateCourseRepository },
        { provide: PasswordRepository, useClass: DataPasswordRepository },
        { provide: UpdatePasswordRepository, useClass: DataUpdatePasswordRepository },
        { provide: AddUserRepository, useClass: DataAddUserRepository },
        { provide: GetUserRepository, useClass: DataGetUserRepository },
        { provide: AddCourseTeacherRepository, useClass: DataAddCourseTeacherRepository },
        { provide: AddCourseStudentRepository, useClass: DataAddCourseStudentRepository },
        { provide: GetCourseTeacherRepository, useClass: DataGetCourseTeacherRepository },
        { provide: GetCoursesTeacherRepository, useClass: DataGetCoursesTeacherRepository },
        { provide: GetCourseStudentRepository, useClass: DataGetCourseStudentRepository },
        { provide: GetCoursesStudentRepository, useClass: DataGetCoursesStudentRepository }
        
    ],
    exports: [
        AddCourseRepository,
        GetCourseRepository,
        GetCoursesRepository,
        DelCourseRepository,
        UpdateCourseRepository,
        PasswordRepository,
        UpdatePasswordRepository,
        AddUserRepository,
        GetUserRepository,
        AddCourseTeacherRepository,
        AddCourseStudentRepository,
        GetCourseTeacherRepository,
        GetCoursesTeacherRepository,
        GetCourseStudentRepository,
        GetCoursesStudentRepository
    ]
})
export class DataModule { }
