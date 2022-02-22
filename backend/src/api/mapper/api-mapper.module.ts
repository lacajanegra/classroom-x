import { ApiCourseMapper } from './api-course.mapper';
import { ApiCourseStudentMapper } from './api-course-student.mapper';
import { ApiCourseTeacherDetailsMapper } from './api-course-teacher-details.mapper';
import { ApiCourseTeacherForStudentMapper } from './api-course-teacher-for-student.mapper';
import { ApiCourseTeacherMapper } from './api-course-teacher.mapper';
import { ApiCourseTeachersForStudentMapper } from './api-course-teachers-for-student.mapper';
import { ApiCoursesFilterMapper } from './api-courses-filter.mapper';
import { ApiCoursesMapper } from './api-courses.mapper';
import { ApiCoursesStudentMapper } from './api-courses-student.mapper';
import { ApiCoursesTeacherDetailsMapper } from './api-courses-teacher-details.mapper';
import { ApiCoursesTeacherMapper } from './api-courses-teacher.mapper';
import { ApiCoursesTeacherStudentMapper } from './api-courses-teacher-student.mapper';
import { ApiCreateCourseMapper } from './api-create-course.mapper';
import { ApiCreateUserMapper } from './api-create-user.mapper';
import { ApiLoginMapper } from './api-login.mapper';
import { ApiResetPasswordMapper } from './api-reset-password.mapper';
import { ApiTokenMapper } from './api-token.mapper';
import { ApiUserMapper } from './api-user.mapper';
import { GuardModule } from '../guard/guard.module';
import { Module } from '@nestjs/common';
import { ApiUsersMapper } from './api-users.mapper';
import { ApiCourseToTeachMapper } from './api-course-to-teach.mapper';
import { ApiCoursesToTeachMapper } from './api-courses-to-teach.mapper';
import { ApiCourseToLearnMapper } from './api-course-to-learn.mapper';
import { ApiCoursesToLearnMapper } from './api-courses-to-learn.mapper';
import { ApiCourseTeacherStudentMapper } from './api-course-teacher-student.mapper';

@Module({
    imports: [
        GuardModule
    ],
    providers: [
        ApiLoginMapper,
        ApiTokenMapper,
        ApiUserMapper,
        ApiCreateUserMapper,
        ApiResetPasswordMapper,
        ApiCoursesFilterMapper,
        ApiCourseMapper,
        ApiCoursesMapper,
        ApiCourseTeacherMapper,
        ApiCoursesTeacherMapper,
        ApiCourseTeacherDetailsMapper,
        ApiCoursesTeacherDetailsMapper,
        ApiCreateCourseMapper,
        ApiCourseStudentMapper,
        ApiCoursesStudentMapper,
        ApiCourseTeacherForStudentMapper,
        ApiCourseTeachersForStudentMapper,
        ApiCourseTeacherStudentMapper,
        ApiCoursesTeacherStudentMapper,
        ApiUsersMapper,
        ApiCourseToTeachMapper,
        ApiCoursesToTeachMapper,
        ApiCourseToLearnMapper,
        ApiCoursesToLearnMapper
    ],
    exports: [
        ApiLoginMapper,
        ApiTokenMapper,
        ApiUserMapper,
        ApiCreateUserMapper,
        ApiResetPasswordMapper,
        ApiCoursesFilterMapper,
        ApiCourseMapper,
        ApiCoursesMapper,
        ApiCourseTeacherMapper,
        ApiCoursesTeacherMapper,
        ApiCourseTeacherDetailsMapper,
        ApiCoursesTeacherDetailsMapper,
        ApiCreateCourseMapper,
        ApiCourseStudentMapper,
        ApiCoursesStudentMapper,
        ApiCourseTeacherForStudentMapper,
        ApiCourseTeachersForStudentMapper,
        ApiCourseTeacherStudentMapper,
        ApiCoursesTeacherStudentMapper,
        ApiUsersMapper,
        ApiCourseToTeachMapper,
        ApiCoursesToTeachMapper,
        ApiCourseToLearnMapper,
        ApiCoursesToLearnMapper
    ]
})
export class ApiMapperModule { }
