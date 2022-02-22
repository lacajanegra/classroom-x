import { Controller, Get, Logger, Param, Post, UseGuards } from '@nestjs/common';

import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { StatusGuard } from 'src/api/guard/status.guard';
import { CourseStudentDto } from 'src/api/model/course-student.dto';
import { GetUserId } from 'src/api/decorator/get-user-id.decorator';
import { ApiGetCoursesToLearnService } from '../service/api-get-courses-to-learn.service';
import { ApiGetCoursesStudentService } from '../service/api-get-courses-student.service';
import { ApiGetCourseStudentService } from '../service/api-get-course-student.service';
import { ApiAddCourseStudentService } from '../service/api-add-course-student.service';
import { JwtGuard } from '../guard/jwt.guard';
import { UserDto } from '../model/user.dto';
import { ApiGetStudentsService } from '../service/api-get-students.service';
import { CourseDto } from '../model/course.dto';

@Controller('student')
@UseGuards(JwtGuard, RolesGuard, StatusGuard)
export class StudentController {

    private logger = new Logger('StudentController')

    constructor(
        private readonly apiGetStudentsService: ApiGetStudentsService,
        private readonly apiGetCoursesToLearnService: ApiGetCoursesToLearnService,
        private readonly apiGetCoursesStudentService: ApiGetCoursesStudentService,
        private readonly apiGetCourseStudentService: ApiGetCourseStudentService,
        private readonly apiAddCourseStudentService: ApiAddCourseStudentService
    ) { }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Get('all')
    async getStudents(@GetUserId() userId: string): Promise<UserDto[]> {
        this.logger.debug(`Get all student - userId: ${userId}`)
        return await this.apiGetStudentsService.execute()
    }

    @Roles(RoleEnum.STUDENT)
    @Status(StatusEnum.ACTIVE)
    @Get('courses/to-learn')
    async getCoursesToLearn(@GetUserId() userId: string): Promise<CourseDto[]> {
        this.logger.debug(`Get all courses to learn - userId: ${userId}`)
        return await this.apiGetCoursesToLearnService.execute(userId)
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
    async getCourse(@Param('id') courseTeacherId: string, @GetUserId() userId: string): Promise<CourseStudentDto> {
        this.logger.log(`Get relation courseTeacherId ${courseTeacherId} -> userId: ${userId} - user: ${userId}`)
        return await this.apiGetCourseStudentService.execute(courseTeacherId, userId)
    }

}
