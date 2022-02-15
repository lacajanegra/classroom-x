import { CourseEntity } from "../entity/course.entity";
import { CourseStudentEntity } from "../entity/course-student.entity";
import { UserEntity } from "../entity/user.entity";

export abstract class CourseStudentRepository {

    abstract createRelation(course: CourseEntity, student: UserEntity): Promise<CourseStudentEntity>

    abstract updateQualification(id: string, qualification: number): Promise<CourseStudentEntity>

}