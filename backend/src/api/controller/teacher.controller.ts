import { Body, Controller, Get, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { CourseTeacherDto } from 'src/api/model/course-teacher.dto';
import { CourseTeacherDetailsDto } from 'src/api/model/course-teacher-details.dto';
import { CourseStudentQualificationRequestDto } from 'src/api/model/course-student-qualification-request.dto';
import { CourseTeacherStudentDetailsDto } from 'src/api/model/course-teacher-student-details.dto';
import { GetUserId } from 'src/api/decorator/get-user-id.decorator';
import { ApiGetCoursesTeacherService } from '../service/api-get-courses-teacher.service';
import { ApiGetCourseTeacherService } from '../service/api-get-course-teacher.service';
import { ApiAddCourseTeacherService } from '../service/api-add-course-teacher.service';
import { ApiUpdateCourseQualificationService } from '../service/api-update-course-qualification.service';
import { JwtGuard } from '../guard/jwt.guard';
import { UserDto } from '../model/user.dto';
import { ApiGetCoursesToTeachService } from '../service/api-get-courses-to-teach.service';
import { ApiGetTeachersService } from '../service/api-get-teachers.service';
import { CourseDto } from '../model/course.dto';

@Controller('teacher')
@UseGuards(JwtGuard, RolesGuard, StatusGuard)
export class TeacherController {

    private logger = new Logger('TeacherController')

    constructor(
        private readonly apiGetTeachersService: ApiGetTeachersService,
        private readonly apiGetCoursesToTeachService: ApiGetCoursesToTeachService,
        private readonly apiAddCourseTeacherService: ApiAddCourseTeacherService,
        private readonly apiGetCourseTeacherService: ApiGetCourseTeacherService,
        private readonly apiGetCoursesTeacherService: ApiGetCoursesTeacherService,
        private readonly apiUpdateCourseQualificationService: ApiUpdateCourseQualificationService
    ) { }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Get('all')
    async getTeachers(@GetUserId() userId: string): Promise<UserDto[]> {
        this.logger.debug(`Get all teachers - userId: ${userId}`)
        return await this.apiGetTeachersService.execute()
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('courses/to-teach')
    async getCoursesToTeach(@GetUserId() userId: string): Promise<CourseDto[]> {
        this.logger.debug(`Get all courses to teach - userId: ${userId}`)
        return await this.apiGetCoursesToTeachService.execute(userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Post('course/:id')
    async addCourse(@Param('id') courseId: string, @GetUserId() userId: string): Promise<CourseTeacherDto> {
        this.logger.log(`Add relation courseId ${courseId} -> userId: ${userId}`)
        return await this.apiAddCourseTeacherService.execute(courseId, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('course/:id')
    async getCourse(@Param('id') courseTeacherId: string, @GetUserId() userId: string): Promise<CourseTeacherDetailsDto> {
        this.logger.debug(`Get relation courseTeacherId ${courseTeacherId} - userId: ${userId}`)
        return await this.apiGetCourseTeacherService.execute(courseTeacherId, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('courses')
    async getCourses(@GetUserId() userId: string): Promise<CourseTeacherDto[]> {
        this.logger.debug(`Get all courses - userId: ${userId}`)
        return await this.apiGetCoursesTeacherService.execute(userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Patch('course/:id/student/:student/qualification')
    async updateCourse(@Body() request: CourseStudentQualificationRequestDto, @Param('id') courseTeacherId: string, @Param('student') courseStudentId: string, @GetUserId() userId: string): Promise<CourseTeacherStudentDetailsDto> {
        this.logger.log(`Update relation courseTeacherId ${courseTeacherId} -> courseStudentId ${courseStudentId} -> qualification ${request.qualification} - userId: ${userId}`)
        return await this.apiUpdateCourseQualificationService.execute(request, courseTeacherId, courseStudentId, userId)
    }
}
