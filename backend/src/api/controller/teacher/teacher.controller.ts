import { Controller, Get, Logger, Param, Post, UseGuards } from '@nestjs/common';

import { AddCourseTeacherService } from 'src/domain/use-case/teacher/add-course/add-course-teacher.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { GetCourseTeacherService } from 'src/domain/use-case/teacher/get-course/get-course-teacher.service';
import { GetCoursesTeacherService } from 'src/domain/use-case/teacher/get-courses/get-courses-teacher.service';
import { UserModel } from 'src/domain/model/user.model';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { ApiCoursesTeacherMapper } from '../../mapper/api-courses-teacher.mapper';
import { ApiCourseTeacherMapper } from 'src/api/mapper/api-course-teacher.mapper';
import { CourseTeacherDto } from 'src/api/model/course-teacher.dto';
import { CourseTeacherDetailsDto } from 'src/api/model/course-teacher-details.dto';
import { ApiCourseTeacherDetailsMapper } from 'src/api/mapper/api-course-teacher-details.mapper';

@Controller('teacher')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class TeacherController {

    private logger = new Logger('TeacherController')

    constructor(
        private readonly addCourseTeacherService: AddCourseTeacherService,
        private readonly getCourseTeacherService: GetCourseTeacherService,
        private readonly getCoursesTeacherService: GetCoursesTeacherService,
        private readonly apiCourseTeacherMapper: ApiCourseTeacherMapper,
        private readonly apiCourseTeacherDetailsMapper: ApiCourseTeacherDetailsMapper,
        private readonly apiCoursesTeacherMapper: ApiCoursesTeacherMapper
    ) { }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Post('course/:id')
    async addCourse(@Param('id') courseId: string, @GetUser() user: UserModel): Promise<CourseTeacherDto> {
        this.logger.log(`Add relation courseId ${courseId} -> teacherId: ${user.id} - user: ${user.username}`)
        return await this.addCourseTeacherService.execute(courseId, user.id)
            .then((relation) => this.apiCourseTeacherMapper.fromModelToDto(relation))
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('course/:id')
    async getCourse(@Param('id') courseTeacherId: string, @GetUser() user: UserModel): Promise<CourseTeacherDetailsDto> {
        this.logger.debug(`Get relation courseTeacherId ${courseTeacherId} - user: ${user.username}`)
        return await this.getCourseTeacherService.execute(courseTeacherId, user.id)
            .then((relation) => this.apiCourseTeacherDetailsMapper.fromModelToDto(relation))
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('courses')
    async getCourses(@GetUser() user: UserModel): Promise<CourseTeacherDto[]> {
        this.logger.debug(`Get all courses - user: ${user.username}`)
        return await this.getCoursesTeacherService.execute(user.id)
            .then((relations) => this.apiCoursesTeacherMapper.fromModelToDto(relations))
    }
}
