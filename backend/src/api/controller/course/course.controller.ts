import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CourseModel } from 'src/domain/model/course.model';
import { GetCoursesService } from 'src/domain/use-case/course/get-courses/get-courses.service';
import { GetCourseService } from 'src/domain/use-case/course/get-course/get-course.service';
import { AddCourseService } from 'src/domain/use-case/course/add-course/add-course.service';
import { UpdateCourseService } from 'src/domain/use-case/course/update-course/update-course.service';
import { DelCourseService } from 'src/domain/use-case/course/del-course/del-course.service';
import { CourseRequestModel } from 'src/domain/model/course-request.model';
import { CoursesFilterRequestModel } from 'src/domain/model/courses-filter-request.model';
import { AuthGuard } from '@nestjs/passport';
import { GetUserId } from 'src/api/decorate/get-user-id.decorator';
import { RoleEnum } from '../../../domain/model/role.enum';
import { Roles } from 'src/api/decorate/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';

@Controller('course')
@UseGuards(AuthGuard(), RolesGuard)
export class CourseController {

    constructor(
        private readonly getCoursesService: GetCoursesService,
        private readonly getCourseService: GetCourseService,
        private readonly addCourseService: AddCourseService,
        private readonly updateCourseService: UpdateCourseService,
        private readonly delCourseService: DelCourseService
    ) { }

    @Roles(RoleEnum.TEACHER)
    @Get('all')
    getCourses(@GetUserId() userId: string,@Query() filter: CoursesFilterRequestModel): Promise<CourseModel[]> {
        return this.getCoursesService.execute(filter, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Get(':id')
    getCourse(@GetUserId() userId: string,@Param('id') id: string): Promise<CourseModel> {
        return this.getCourseService.execute(id, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Post()
    addCourse(@GetUserId() userId: string,@Body() request: CourseRequestModel): Promise<CourseModel> {
        return this.addCourseService.execute(request, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Patch(':id/name')
    updateCourse(@GetUserId() userId: string,@Param('id') id: string, @Body() request: CourseRequestModel): Promise<CourseModel> {
        const { name } = request
        return this.updateCourseService.execute(id, name, userId)
    }

    @Roles(RoleEnum.TEACHER)
    @Delete(':id')
    deleteCourse(@GetUserId() userId: string,@Param('id') id: string): Promise<void> {
        return this.delCourseService.execute(id, userId)
    }
}
