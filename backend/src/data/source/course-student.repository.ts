import { CourseStudentEntity } from '../entity/course-student.entity';

export abstract class CourseStudentRepository {

    abstract createRelation(courseTeacherId: string, courseId: string, userId: string): Promise<CourseStudentEntity>

    abstract getRelation(courseStudentId: string, userId: string): Promise<CourseStudentEntity>

    abstract getAll(userId: string): Promise<CourseStudentEntity[]>

    abstract updateCourse(entity: CourseStudentEntity): Promise<CourseStudentEntity>

}