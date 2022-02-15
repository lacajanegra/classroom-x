import { DataCourseMapper } from './data-course.mapper';
import { DataCourseStudentMapper } from './data-course-student.mapper';
import { DataCoursesMapper } from './data-courses.mapper';
import { DataRoleMapper } from './data-role.mapper';
import { DataRolesMapper } from './data-roles.mapper';
import { DataStatusMapper } from './data-status.mapper';
import { DataStudentMapper } from './data-student.mapper';
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
        DataStatusMapper
    ],
    exports: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
        DataRoleMapper,
        DataRolesMapper,
        DataStudentMapper,
        DataCourseStudentMapper,
        DataStatusMapper
    ]
})
export class DataMapperModule { }
