import { DataCourseMapper } from './data-course.mapper';
import { DataCourseStudentMapper } from './data-course-student.mapper';
import { DataCourseTeacherDetailsMapper } from './data-course-teacher-details.mapper';
import { DataCourseTeacherMapper } from './data-course-teacher.mapper';
import { DataCoursesMapper } from './data-courses.mapper';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { DataRoleMapper } from './data-role.mapper';
import { DataRolesMapper } from './data-roles.mapper';
import { DataStatusMapper } from './data-status.mapper';
import { DataStudentDetailsMapper } from './data-student-details.mapper';
import { DataStudentMapper } from './data-student.mapper';
import { DataStudentsDetailsMapper } from './data-students-details.mapper';
import { DataTeacherMapper } from './data-teacher.mapper';
import { DataUserMapper } from './data-user.mapper';
import { Module } from '@nestjs/common';
import { UtilModule } from '../util/util.module';

@Module({
    imports: [UtilModule],
    providers: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
        DataRoleMapper,
        DataRolesMapper,
        DataStudentMapper,
        DataCourseStudentMapper,
        DataStatusMapper,
        DataCourseTeacherMapper,
        DataCoursesTeacherMapper,
        DataCourseTeacherDetailsMapper,
        DataTeacherMapper,
        DataStudentDetailsMapper,
        DataStudentsDetailsMapper
    ],
    exports: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
        DataRoleMapper,
        DataRolesMapper,
        DataStudentMapper,
        DataCourseStudentMapper,
        DataStatusMapper,
        DataCourseTeacherMapper,
        DataCoursesTeacherMapper,
        DataCourseTeacherDetailsMapper,
        DataTeacherMapper,
        DataStudentDetailsMapper,
        DataStudentsDetailsMapper
    ]
})
export class DataMapperModule { }
