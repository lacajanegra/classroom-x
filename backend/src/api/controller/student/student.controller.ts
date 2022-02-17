import { Controller, Get, Logger, Param, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { CourseTeachersDto } from 'src/api/model/course-teachers.dto';
import { GetCoursesStudentService } from 'src/domain/use-case/student/get-courses/get-courses-student.service';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { StatusGuard } from 'src/api/guard/status.guard';
import { ApiCoursesStudentMapper } from 'src/api/mapper/api-courses-student.mapper';
import { UserModel } from 'src/domain/model/user.model';
import { CourseStudentDto } from 'src/api/model/course-student.dto';
import { ApiCourseStudentMapper } from 'src/api/mapper/api-course-student.mapper';
import { ApiCourseStudentDetailsMapper } from 'src/api/mapper/api-course-student-details.mapper';
import { CourseStudentDetailsDto } from 'src/api/model/course-student-details.dto';
import { GetCoursesTeachersService } from 'src/domain/use-case/student/get-courses-teachers/get-courses-teachers.service';
import { ApiCoursesTeachersMapper } from 'src/api/mapper/api-courses-teachers.mapper';
import { AddCourseStudentService } from 'src/domain/use-case/student/add-course/add-course-student.service';
import { GetCourseStudentService } from 'src/domain/use-case/student/get-course/get-course-student.service';

@Controller('student')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class StudentController {

    private logger = new Logger('StudentController')

    constructor(
        private readonly getCoursesTeachersService: GetCoursesTeachersService,
        private readonly getCoursesStudentService: GetCoursesStudentService,
        private readonly getCourseStudentService: GetCourseStudentService,
        private readonly addCourseStudentService: AddCourseStudentService,
        private readonly apiCoursesStudentMapper: ApiCoursesStudentMapper,
        private readonly apiCoursesTeachersMapper: ApiCoursesTeachersMapper,
        private readonly apiCourseStudentMapper: ApiCourseStudentMapper,
        private readonly apiCourseStudentDetailsMapper: ApiCourseStudentDetailsMapper
    ) { }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('courses/teachers')
    async getCoursesTeachers(@GetUser() user: UserModel): Promise<CourseTeachersDto[]> {
        this.logger.debug(`Get all courses teachers - user: ${user.username}`)
        return await this.getCoursesTeachersService.execute()
            .then((relations) => this.apiCoursesTeachersMapper.fromModelToDto(relations))
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('courses')
    async getCourses(@GetUser() user: UserModel): Promise<CourseStudentDto[]> {
        this.logger.debug(`Get all courses - user: ${user.username}`)
        return await this.getCoursesStudentService.execute(user.id)
            .then((relations) => this.apiCoursesStudentMapper.fromModelToDto(relations))
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Post('course/:id')
    async addCourse(@Param('id') courseTeacherId: string, @GetUser() user: UserModel): Promise<CourseStudentDto> {
        this.logger.log(`Add relation courseTeacherId ${courseTeacherId} -> userId: ${user.id} - user: ${user.username}`)
        return await this.addCourseStudentService.execute(courseTeacherId, user.id)
            .then((relation) => this.apiCourseStudentMapper.fromModelToDto(relation))
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('course/:id')
    async getCourse(@Param('id') courseTeacherId: string, @GetUser() user: UserModel): Promise<CourseStudentDetailsDto> {
        this.logger.log(`Get relation courseTeacherId ${courseTeacherId} -> userId: ${user.id} - user: ${user.username}`)
        return await this.getCourseStudentService.execute(courseTeacherId, user.id)
            .then((relation) => this.apiCourseStudentDetailsMapper.fromModelToDto(relation))
    }

}
