import { Controller, Get, Logger, Param, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { CourseTeachersDto } from 'src/api/model/course-teachers.dto';
import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { StatusGuard } from 'src/api/guard/status.guard';
import { CourseStudentDto } from 'src/api/model/course-student.dto';
import { CourseStudentDetailsDto } from 'src/api/model/course-student-details.dto';
import { GetUserId } from 'src/api/decorator/get-user-id.decorator';
import { ApiGetCoursesStudentTeachersService } from '../service/api-get-courses-student-teachers.service';
import { ApiGetCoursesStudentService } from '../service/api-get-courses-student.service';
import { ApiGetCourseStudentService } from '../service/api-get-course-student.service';
import { ApiAddCourseStudentService } from '../service/api-add-course-student.service';

@Controller('student')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class StudentController {

    private logger = new Logger('StudentController')

    constructor(
        private readonly apiGetCoursesStudentTeachersService: ApiGetCoursesStudentTeachersService,
        private readonly apiGetCoursesStudentService: ApiGetCoursesStudentService,
        private readonly apiGetCourseStudentService: ApiGetCourseStudentService,
        private readonly apiAddCourseStudentService: ApiAddCourseStudentService
    ) { }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('courses/teachers')
    async getCoursesTeachers(@GetUserId() userId: string): Promise<CourseTeachersDto[]> {
        this.logger.debug(`Get all courses student by teachers - userId: ${userId}`)
        return await this.apiGetCoursesStudentTeachersService.execute(userId)
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('courses')
    async getCourses(@GetUserId() userId: string): Promise<CourseStudentDto[]> {
        this.logger.debug(`Get all courses student - userId: ${userId}`)
        return await this.apiGetCoursesStudentService.execute(userId)
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Post('course/:id')
    async addCourse(@Param('id') courseTeacherId: string, @GetUserId() userId: string): Promise<CourseStudentDto> {
        this.logger.log(`Add relation courseTeacherId ${courseTeacherId} -> userId: ${userId} - user: ${userId}`)
        return await this.apiAddCourseStudentService.execute(courseTeacherId, userId)
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('course/:id')
    async getCourse(@Param('id') courseTeacherId: string, @GetUserId() userId: string): Promise<CourseStudentDetailsDto> {
        this.logger.log(`Get relation courseTeacherId ${courseTeacherId} -> userId: ${userId} - user: ${userId}`)
        return await this.apiGetCourseStudentService.execute(courseTeacherId, userId)
    }

}
