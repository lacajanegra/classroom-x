import { GetCoursesToLearnService } from './get-courses-to-learn.service';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { GetCoursesToLearnRepository } from 'src/domain/repository/get-courses-to-learn.repository';
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';
import { GetCoursesStudentService } from 'src/domain/use-case/student/get-courses/get-courses-student.service';

@Injectable()
export class GetCoursesToLearnUseCaseService implements GetCoursesToLearnService {

    constructor(
        private readonly getCoursesStudentService: GetCoursesStudentService,
        private readonly getCoursesToLearnRepository: GetCoursesToLearnRepository
    ) { }

    async execute(userId: string): Promise<CourseToLearnModel[]> {
        const coursesStudent = await this.getCoursesStudentService.execute(userId)
        const courses: string[] = coursesStudent.map((course) => { return course.course.id })

        return await this.getCoursesToLearnRepository.getCourses()
            .then((response: CourseToLearnModel[]) => { return response.filter((course) => course.teachers.length !== 0 && !courses.includes(course.course.id)) })
    }
}
