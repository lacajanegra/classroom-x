import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class CourseStudentRepository {

    abstract createRelation(courseId: string, userId: string): Promise<CourseStudentModel>

    abstract getRelation(courseStudentId: string): Promise<CourseStudentEntity>

    abstract updateRelation(entity: CourseStudentEntity): Promise<CourseStudentEntity>

}