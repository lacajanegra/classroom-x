import { DataCourseMapper } from './data-course.mapper';
import { DataCourseStudentDetailsMapper } from './data-course-student-details.mapper';
import { DataCourseStudentMapper } from './data-course-student.mapper';
import { DataCourseStudentsDetailsMapper } from './data-course-students-details.mapper';
import { DataCourseTeacherDetailsMapper } from './data-course-teacher-details.mapper';
import { DataCourseTeacherMapper } from './data-course-teacher.mapper';
import { DataCourseTeachersMapper } from './data-course-teachers.mapper';
import { DataCoursesMapper } from './data-courses.mapper';
import { DataCoursesStudentMapper } from './data-courses-student.mapper';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { DataCoursesTeachersMapper } from './data-courses-teachers.mapper';
import { DataRoleMapper } from './data-role.mapper';
import { DataRolesMapper } from './data-roles.mapper';
import { DataStatusMapper } from './data-status.mapper';
import { DataStudentMapper } from './data-student.mapper';
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
        DataCoursesStudentMapper,
        DataStatusMapper,
        DataCourseTeacherMapper,
        DataCoursesTeacherMapper,
        DataCourseTeacherDetailsMapper,
        DataTeacherMapper,
        DataCourseStudentDetailsMapper,
        DataCourseStudentsDetailsMapper,
        DataCourseTeachersMapper,
        DataCoursesTeachersMapper
    ],
    exports: [
        DataCourseMapper,
        DataCoursesMapper,
        DataUserMapper,
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
        DataCourseStudentDetailsMapper,
        DataCourseStudentsDetailsMapper,
        DataCourseTeachersMapper,
        DataCoursesTeachersMapper
    ]
})
export class DataMapperModule { }
