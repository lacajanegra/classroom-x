import { ApiAddCourseService } from './api-add-course.service';
import { ApiAddCourseStudentService } from './api-add-course-student.service';
import { ApiAddCourseTeacherService } from './api-add-course-teacher.service';
import { ApiDelCourseService } from './api-del-course.service';
import { ApiGetCourseService } from './api-get-course.service';
import { ApiGetCourseStudentService } from './api-get-course-student.service';
import { ApiGetCourseTeacherService } from './api-get-course-teacher.service';
import { ApiGetCoursesService } from './api-get-courses.service';
import { ApiGetCoursesStudentService } from './api-get-courses-student.service';
import { ApiGetCoursesStudentTeachersService } from './api-get-courses-student-teachers.service';
import { ApiGetCoursesTeacherService } from './api-get-courses-teacher.service';
import { ApiGetUserInformationService } from './api-get-user-information.service';
import { ApiMapperModule } from '../mapper/api-mapper.module';
import { ApiResetPasswordService } from './api-reset-password.service';
import { ApiSignInService } from './api-sign-in.service';
import { ApiSignUpService } from './api-sign-up.service';
import { ApiUpdateCourseQualificationService } from './api-update-course-qualification.service';
import { ApiUpdateCourseService } from './api-update-course.service';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from '../guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
    imports:[
        DomainModule,
        GuardModule,
        ApiMapperModule    
    ],
    providers: [
        ApiSignInService,
        ApiSignUpService,
        ApiResetPasswordService,
        ApiAddCourseService,
        ApiGetCourseService,
        ApiGetCoursesService,
        ApiUpdateCourseService,
        ApiDelCourseService,
        ApiGetUserInformationService,
        ApiAddCourseTeacherService,
        ApiGetCourseTeacherService,
        ApiGetCoursesTeacherService,
        ApiUpdateCourseQualificationService,
        ApiGetCoursesStudentTeachersService,
        ApiGetCoursesStudentService,
        ApiGetCourseStudentService,
        ApiAddCourseStudentService
    ],
    exports: [
        ApiSignInService,
        ApiSignUpService,
        ApiResetPasswordService,
        ApiAddCourseService,
        ApiGetCourseService,
        ApiGetCoursesService,
        ApiUpdateCourseService,
        ApiDelCourseService,
        ApiGetUserInformationService,
        ApiAddCourseTeacherService,
        ApiGetCourseTeacherService,
        ApiGetCoursesTeacherService,
        ApiUpdateCourseQualificationService,
        ApiGetCoursesStudentTeachersService,
        ApiGetCoursesStudentService,
        ApiGetCourseStudentService,
        ApiAddCourseStudentService
    ]
})
export class ApiServiceModule { }
