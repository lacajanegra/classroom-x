import { ApiCourseMapper } from './api-course.mapper';
import { ApiCourseStudentDetailsMapper } from './api-course-student-details.mapper';
import { ApiCourseStudentMapper } from './api-course-student.mapper';
import { ApiCourseTeacherDetailsMapper } from './api-course-teacher-details.mapper';
import { ApiCourseTeacherForStudentMapper } from './api-course-teacher-for-student.mapper';
import { ApiCourseTeacherMapper } from './api-course-teacher.mapper';
import { ApiCourseTeacherStudentDetailsMapper } from './api-course-teacher-student-details.mapper';
import { ApiCourseTeachersForStudentMapper } from './api-course-teachers-for-student.mapper';
import { ApiCourseTeachersMapper } from './api-course-teachers.mapper';
import { ApiCoursesFilterMapper } from './api-courses-filter.mapper';
import { ApiCoursesMapper } from './api-courses.mapper';
import { ApiCoursesStudentDetailsMapper } from './api-courses-student-details.mapper';
import { ApiCoursesStudentMapper } from './api-courses-student.mapper';
import { ApiCoursesTeacherDetailsMapper } from './api-courses-teacher-details.mapper';
import { ApiCoursesTeacherMapper } from './api-courses-teacher.mapper';
import { ApiCoursesTeacherStudentDetailsMapper } from './api-courses-teacher-student-details.mapper';
import { ApiCoursesTeachersMapper } from './api-courses-teachers.mapper';
import { ApiCreateCourseMapper } from './api-create-course.mapper';
import { ApiCreateUserMapper } from './api-create-user.mapper';
import { ApiLoginMapper } from './api-login.mapper';
import { ApiResetPasswordMapper } from './api-reset-password.mapper';
import { ApiTokenMapper } from './api-token.mapper';
import { ApiUserMapper } from './api-user.mapper';
import { GuardModule } from '../guard/guard.module';
import { Module } from '@nestjs/common';

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
        ApiCourseStudentDetailsMapper,
        ApiCoursesStudentDetailsMapper,
        ApiCourseTeacherDetailsMapper,
        ApiCoursesTeacherDetailsMapper,
        ApiCreateCourseMapper,
        ApiCourseStudentMapper,
        ApiCoursesStudentMapper,
        ApiCourseTeachersMapper,
        ApiCoursesTeachersMapper,
        ApiCourseTeacherForStudentMapper,
        ApiCourseTeachersForStudentMapper,
        ApiCourseTeacherStudentDetailsMapper,
        ApiCoursesTeacherStudentDetailsMapper
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
        ApiCourseStudentDetailsMapper,
        ApiCoursesStudentDetailsMapper,
        ApiCourseTeacherDetailsMapper,
        ApiCoursesTeacherDetailsMapper,
        ApiCreateCourseMapper,
        ApiCourseStudentMapper,
        ApiCoursesStudentMapper,
        ApiCourseTeachersMapper,
        ApiCoursesTeachersMapper,
        ApiCourseTeacherForStudentMapper,
        ApiCourseTeachersForStudentMapper,
        ApiCourseTeacherStudentDetailsMapper,
        ApiCoursesTeacherStudentDetailsMapper
    ]
})
export class ApiMapperModule { }
