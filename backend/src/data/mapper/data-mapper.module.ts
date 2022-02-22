import { DataCourseMapper } from './data-course.mapper';
import { DataCourseStudentMapper } from './data-course-student.mapper';
import { DataCourseTeacherDetailsMapper } from './data-course-teacher-details.mapper';
import { DataCourseTeacherMapper } from './data-course-teacher.mapper';
import { DataCoursesMapper } from './data-courses.mapper';
import { DataCoursesStudentMapper } from './data-courses-student.mapper';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { DataRoleMapper } from './data-role.mapper';
import { DataRolesMapper } from './data-roles.mapper';
import { DataStatusMapper } from './data-status.mapper';
import { DataStudentMapper } from './data-student.mapper';
import { DataTeacherMapper } from './data-teacher.mapper';
import { DataUserMapper } from './data-user.mapper';
import { Module } from '@nestjs/common';
import { UtilModule } from '../util/util.module';
import { DataUsersMapper } from './data-users.mapper';
import { DataCourseToTeachMapper } from './data-course-to-teach.mapper';
import { DataCoursesToTeachMapper } from './data-courses-to-teach.mapper';

@Module({
    imports: [UtilModule],
    providers: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
        DataUsersMapper,
        DataRoleMapper,
        DataRolesMapper,
        DataStudentMapper,
        DataCourseStudentMapper,
        DataCoursesStudentMapper,
        DataStatusMapper,
        DataCourseTeacherMapper,
        DataCoursesTeacherMapper,
        DataCourseTeacherDetailsMapper,
        DataTeacherMapper,
        DataCourseToTeachMapper,
        DataCoursesToTeachMapper
    ],
    exports: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
        DataUsersMapper,
        DataRoleMapper,
        DataRolesMapper,
        DataStudentMapper,
        DataCourseStudentMapper,
        DataCoursesStudentMapper,
        DataStatusMapper,
        DataCourseTeacherMapper,
        DataCoursesTeacherMapper,
        DataCourseTeacherDetailsMapper,
        DataTeacherMapper,
        DataCourseToTeachMapper,
        DataCoursesToTeachMapper
    ]
})
export class DataMapperModule { }
