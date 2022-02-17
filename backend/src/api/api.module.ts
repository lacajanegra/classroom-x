import { ApiMapperModule } from './mapper/api-mapper.module';
import { AuthModule } from './controller/auth/auth.module';
import { CourseModule } from './controller/course/course.module';
import { Module } from '@nestjs/common';
import { StudentModule } from './controller/student/student.module';
import { TeacherModule } from './controller/teacher/teacher.module';
import { UserModule } from './controller/user/user.module';

@Module({
    imports: [
        AuthModule,
        TeacherModule,
        CourseModule,
        StudentModule,
        UserModule,
        ApiMapperModule
    ]
})
export class ApiModule { }
