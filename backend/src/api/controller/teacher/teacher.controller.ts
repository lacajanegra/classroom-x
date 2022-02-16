import { Controller, Get, Logger, Param, Put, UseGuards } from '@nestjs/common';

import { AddCourseTeacherService } from 'src/domain/use-case/teacher/add-course/add-course-teacher.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorate/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorate/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { GetCourseTeacherService } from 'src/domain/use-case/teacher/get-course/get-course-teacher.service';
import { GetCoursesTeacherService } from 'src/domain/use-case/teacher/get-courses/get-courses-teacher.service';
import { CourseTeacherDetailsModel } from '../../../domain/model/course-teacher-details.model';
import { UserModel } from 'src/domain/model/user.model';
import { GetUser } from 'src/api/decorate/get-user.decorator';

@Controller('teacher')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class TeacherController {

    private logger = new Logger('TeacherController')

    constructor(
        private readonly addCourseTeacherService: AddCourseTeacherService,
        private readonly getCourseTeacherService: GetCourseTeacherService,
        private readonly getCoursesTeacherService: GetCoursesTeacherService
    ) { }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Put('course/:id')
    addCourse(@Param('id') courseId: string, @GetUser() user: UserModel): Promise<CourseTeacherModel> {
        this.logger.log(`Add relation courseId ${courseId} -> teacherId: ${user.id} - user: ${user.username}`)
        return this.addCourseTeacherService.execute(courseId, user.id)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('course/:id')
    getCourse(@Param('id') courseId: string, @GetUser() user: UserModel): Promise<CourseTeacherDetailsModel> {
        this.logger.debug(`Get relation courseId ${courseId} - user: ${user.username}`)
        return this.getCourseTeacherService.execute(courseId, user.id)
    }

    @Roles(RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('courses')
    getCourses(@GetUser() user: UserModel): Promise<CourseTeacherModel[]> {
        this.logger.debug(`Get all courses - user: ${user.username}`)
        return this.getCoursesTeacherService.execute(user.id)
    }
}
