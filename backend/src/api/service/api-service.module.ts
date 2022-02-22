import { ApiAddCourseService } from './api-add-course.service';
import { ApiAddCourseStudentService } from './api-add-course-student.service';
import { ApiAddCourseTeacherService } from './api-add-course-teacher.service';
import { ApiDelCourseService } from './api-del-course.service';
import { ApiGetCourseService } from './api-get-course.service';
import { ApiGetCourseStudentService } from './api-get-course-student.service';
import { ApiGetCourseTeacherService } from './api-get-course-teacher.service';
import { ApiGetCoursesService } from './api-get-courses.service';
import { ApiGetCoursesStudentService } from './api-get-courses-student.service';
import { ApiGetCoursesToLearnService } from './api-get-courses-to-learn.service';
import { ApiGetCoursesTeacherService } from './api-get-courses-teacher.service';
import { ApiMapperModule } from '../mapper/api-mapper.module';
import { ApiResetPasswordService } from './api-reset-password.service';
import { ApiSignInService } from './api-sign-in.service';
import { ApiSignUpService } from './api-sign-up.service';
import { ApiUpdateCourseQualificationService } from './api-update-course-qualification.service';
import { ApiUpdateCourseService } from './api-update-course.service';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from '../guard/guard.module';
import { Module } from '@nestjs/common';
import { ApiGetStudentsService } from './api-get-students.service';
import { ApiGetTeachersService } from './api-get-teachers.service';
import { ApiGetCoursesToTeachService } from './api-get-courses-to-teach.service';

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
        ApiAddCourseTeacherService,
        ApiGetCourseTeacherService,
        ApiGetCoursesTeacherService,
        ApiUpdateCourseQualificationService,
        ApiGetCoursesToLearnService,
        ApiGetCoursesToTeachService,
        ApiGetCoursesStudentService,
        ApiGetCourseStudentService,
        ApiAddCourseStudentService,
        ApiGetStudentsService,
        ApiGetTeachersService
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
        ApiAddCourseTeacherService,
        ApiGetCourseTeacherService,
        ApiGetCoursesTeacherService,
        ApiUpdateCourseQualificationService,
        ApiGetCoursesToLearnService,
        ApiGetCoursesToTeachService,
        ApiGetCoursesStudentService,
        ApiGetCourseStudentService,
        ApiAddCourseStudentService,
        ApiGetStudentsService,
        ApiGetTeachersService
    ]
})

export class ApiServiceModule { }
