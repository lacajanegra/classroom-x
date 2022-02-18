import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from '../../domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { CourseDto } from 'src/api/model/course.dto';
import { CoursesFilterRequestDto } from '../model/courses-filter-request.dto';
import { CreateCourseRequestDto } from 'src/api/model/create-course-request.dto';
import { UpdateCourseRequestDto } from 'src/api/model/update-course-request.dto';
import { ApiAddCourseService } from 'src/api/service/api-add-course.service';
import { ApiGetCourseService } from 'src/api/service/api-get-course.service';
import { ApiGetCoursesService } from 'src/api/service/api-get-courses.service';
import { ApiUpdateCourseService } from 'src/api/service/api-update-course.service';
import { ApiDelCourseService } from 'src/api/service/api-del-course.service';
import { GetUserId } from 'src/api/decorator/get-user-id.decorator';

@Controller('course')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class CourseController {

    private logger = new Logger('CourseController')

    constructor(
        private readonly apiGetCoursesService: ApiGetCoursesService,
        private readonly apiGetCourseService: ApiGetCourseService,
        private readonly apiAddCourseService: ApiAddCourseService,
        private readonly apiUpdateCourseService: ApiUpdateCourseService,
        private readonly apiDelCourseService: ApiDelCourseService
    ) { }

    @Roles(RoleEnum.ADMIN, RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('all')
    async getCourses(@Query() filter: CoursesFilterRequestDto, @GetUserId() userId: string): Promise<CourseDto[]> {
        this.logger.debug(`Get all courses - userId: ${userId}`)
        return await this.apiGetCoursesService.execute(filter)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Get(':id')
    async getCourse(@Param('id') id: string, @GetUserId() userId: string): Promise<CourseDto> {
        this.logger.debug(`Get course id: ${id} - userId: ${userId}`)
        return await this.apiGetCourseService.execute(id)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Post()
    async addCourse(@Body() request: CreateCourseRequestDto, @GetUserId() userId: string): Promise<CourseDto> {
        this.logger.log(`Add course ${request.name} - userId: ${userId}`)
        return await this.apiAddCourseService.execute(request)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Patch(':id/name')
    async updateCourse(@Param('id') id: string, @Body() request: UpdateCourseRequestDto, @GetUserId() userId: string): Promise<CourseDto> {
        const { name } = request
        this.logger.log(`Update course id: ${id} -> ${name} - userId: ${userId}`)
        return await this.apiUpdateCourseService.execute(id, request)
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Delete(':id')
    async deleteCourse(@Param('id') id: string, @GetUserId() userId: string): Promise<void> {
        this.logger.log(`Delete course id: ${id} - userId: ${userId}`)
        return await this.apiDelCourseService.execute(id)
    }
}
