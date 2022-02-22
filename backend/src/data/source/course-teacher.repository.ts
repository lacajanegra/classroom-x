import { CourseTeacherEntity } from '../entity/course-teacher.entity';

export abstract class CourseTeacherRepository {

    abstract createRelation(courseId: string, userId: string): Promise<CourseTeacherEntity>

    abstract getRelation(courseTeacherId: string, userId: string): Promise<CourseTeacherEntity>

    abstract getAll(userId: string): Promise<CourseTeacherEntity[]>

    abstract getRelationWithStudents(courseTeacherId: string, userId: string): Promise<CourseTeacherEntity>

    abstract getRelationInfo(courseTeacherId: string): Promise<CourseTeacherEntity>

    abstract getAllRelation(): Promise<CourseTeacherEntity[]> 

}