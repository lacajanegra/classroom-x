import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { AddCourseTeacherService } from 'src/domain/use-case/teacher/add-course/add-course-teacher.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUserId } from 'src/api/decorate/get-user-id.decorator';
import { RoleEnum } from 'src/domain/model/role.enum';
import { Roles } from 'src/api/decorate/roles.decorator';
import { RolesGuard } from 'src/api/guard/roles.guard';
import { StatusGuard } from 'src/api/guard/status.guard';

@Controller('teacher')
@UseGuards(AuthGuard(), RolesGuard, StatusGuard)
export class TeacherController {

    constructor(
        private readonly addCourseTeacherService: AddCourseTeacherService
    ) { }
/*
    @Roles(RoleEnum.TEACHER)
     @Status(StatusEnum.ACTIVE)
   @Get('courses')
    getCourses(@GetUserId() userId: string): Promise<TeacherClassModel[]> {
        return this.getTeacherClassesService.execute(filter, userId)
    }
*/
}
