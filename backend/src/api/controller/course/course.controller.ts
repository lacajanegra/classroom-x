import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { GetCoursesService } from 'src/domain/use-case/course/get-courses/get-courses.service';
import { GetCourseService } from 'src/domain/use-case/course/get-course/get-course.service';
import { AddCourseService } from 'src/domain/use-case/course/add-course/add-course.service';
import { UpdateCourseService } from 'src/domain/use-case/course/update-course/update-course.service';
import { DelCourseService } from 'src/domain/use-case/course/del-course/del-course.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from '../../../domain/model/role.enum';
import { Roles } from 'src/api/decorator/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';
import { Status } from 'src/api/decorator/status.decorator';
import { StatusEnum } from 'src/domain/model/status.enum';
import { UserModel } from 'src/domain/model/user.model';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { ApiCoursesFilterMapper } from 'src/api/mapper/api-courses-filter.mapper';
import { ApiCourseMapper } from 'src/api/mapper/api-course.mapper';
import { CourseDto } from 'src/api/model/course.dto';
import { CoursesFilterRequestDto } from '../../model/courses-filter-request.dto';
import { ApiCoursesMapper } from 'src/api/mapper/api-courses.mapper';
import { ApiCreateCourseMapper } from 'src/api/mapper/api-create-course.mapper';
import { CreateCourseRequestDto } from 'src/api/model/create-course-request.dto';
import { UpdateCourseRequestDto } from 'src/api/model/update-course-request.dto';

@Controller('course')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class CourseController {

    private logger = new Logger('CourseController')

    constructor(
        private readonly getCoursesService: GetCoursesService,
        private readonly getCourseService: GetCourseService,
        private readonly addCourseService: AddCourseService,
        private readonly updateCourseService: UpdateCourseService,
        private readonly delCourseService: DelCourseService,
        private readonly apiCoursesFilterMapper: ApiCoursesFilterMapper,
        private readonly apiCourseMapper: ApiCourseMapper,
        private readonly apiCoursesMapper: ApiCoursesMapper,
        private readonly apiCreateCourseMapper: ApiCreateCourseMapper
    ) { }

    @Roles(RoleEnum.ADMIN, RoleEnum.TEACHER)
    @Status(StatusEnum.ACTIVE)
    @Get('all')
    async getCourses(@Query() filter: CoursesFilterRequestDto, @GetUser() user: UserModel): Promise<CourseDto[]> {
        this.logger.debug(`Get all courses - user: ${user.username}`)
        const filterModel = this.apiCoursesFilterMapper.fromDtoToModel(filter)
        return await this.getCoursesService.execute(filterModel)
            .then((courses) => this.apiCoursesMapper.fromModelToDto(courses))
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Get(':id')
    async getCourse(@Param('id') id: string, @GetUser() user: UserModel): Promise<CourseDto> {
        this.logger.debug(`Get course id: ${id} - user: ${user.username}`)
        return await this.getCourseService.execute(id)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Post()
    async addCourse(@Body() request: CreateCourseRequestDto, @GetUser() user: UserModel): Promise<CourseDto> {
        this.logger.log(`Add course ${request.name} - user: ${user.username}`)
        const requestModel = this.apiCreateCourseMapper.fromDtoToModel(request)
        return await this.addCourseService.execute(requestModel)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Patch(':id/name')
    async updateCourse(@Param('id') id: string, @Body() request: UpdateCourseRequestDto, @GetUser() user: UserModel): Promise<CourseDto> {
        const { name } = request
        this.logger.log(`Update course id: ${id} -> ${name} - user: ${user.username}`)
        return await this.updateCourseService.execute(id, name)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

    @Roles(RoleEnum.ADMIN)
    @Status(StatusEnum.ACTIVE)
    @Delete(':id')
    async deleteCourse(@Param('id') id: string, @GetUser() user: UserModel): Promise<void> {
        this.logger.log(`Delete course id: ${id} - user: ${user.username}`)
        return await this.delCourseService.execute(id)
    }
}
