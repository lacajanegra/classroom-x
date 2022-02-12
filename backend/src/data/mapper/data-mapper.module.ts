import { Module } from '@nestjs/common';
import { DataCourseMapper } from './data-course.mapper';
import { DataCoursesMapper } from './data-courses.mapper';
import { DataRoleMapper } from './data-role.mapper';
import { DataRolesMapper } from './data-roles.mapper';
import { DataUserMapper } from './data-user.mapper';

@Module({
    providers: [DataCourseMapper, DataCoursesMapper, DataUserMapper, DataRoleMapper, DataRolesMapper],
    exports: [DataCourseMapper, DataCoursesMapper, DataUserMapper, DataRoleMapper, DataRolesMapper]
})
export class DataMapperModule { }
