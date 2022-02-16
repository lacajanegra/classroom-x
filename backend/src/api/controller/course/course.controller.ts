import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CourseModel } from 'src/domain/model/course.model';
import { GetCoursesService } from 'src/domain/use-case/course/get-courses/get-courses.service';
import { GetCourseService } from 'src/domain/use-case/course/get-course/get-course.service';
import { AddCourseService } from 'src/domain/use-case/course/add-course/add-course.service';
import { UpdateCourseService } from 'src/domain/use-case/course/update-course/update-course.service';
import { DelCourseService } from 'src/domain/use-case/course/del-course/del-course.service';
import { CourseRequestModel } from 'src/domain/model/course-request.model';
import { CoursesFilterRequestModel } from 'src/domain/model/courses-filter-request.model';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from '../../../domain/model/role.enum';
import { Roles } from 'src/api/decorate/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorate/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { UserModel } from 'src/domain/model/user.model';
import { GetUser } from 'src/api/decorate/get-user.decorator';

@Controller('course')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class CourseController {

    private logger = new Logger('CourseController')

    constructor(
        private readonly getCoursesService: GetCoursesService,
        private readonly getCourseService: GetCourseService,
        private readonly addCourseService: AddCourseService,
        private readonly updateCourseService: UpdateCourseService,
        private readonly delCourseService: DelCourseService
    ) { }

    @Roles(RoleEnum.ADMIN, RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('all')
    getCourses(@Query() filter: CoursesFilterRequestModel, @GetUser() user: UserModel): Promise<CourseModel[]> {
        this.logger.debug(`Get all courses - user: ${user.username}`)
        return this.getCoursesService.execute(filter)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Get(':id')
    getCourse(@Param('id') id: string, @GetUser() user: UserModel): Promise<CourseModel> {
        this.logger.debug(`Get course id: ${id} - user: ${user.username}`)
        return this.getCourseService.execute(id)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Post()
    addCourse(@Body() request: CourseRequestModel, @GetUser() user: UserModel): Promise<CourseModel> {
        this.logger.log(`Add course ${request.name} - user: ${user.username}`)
        return this.addCourseService.execute(request)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Patch(':id/name')
    updateCourse(@Param('id') id: string, @Body() request: CourseRequestModel, @GetUser() user: UserModel): Promise<CourseModel> {
        const { name } = request
        this.logger.log(`Update course id: ${id} -> ${name} - user: ${user.username}`)
        return this.updateCourseService.execute(id, name)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Delete(':id')
    deleteCourse(@Param('id') id: string, @GetUser() user: UserModel): Promise<void> {
        this.logger.log(`Delete course id: ${id} - user: ${user.username}`)
        return this.delCourseService.execute(id)
    }
}
