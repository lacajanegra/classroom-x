import { CourseEntity } from "../entity/course.entity";
import { CourseStudentEntity } from "../entity/course-student.entity";
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { UserEntity } from "../entity/user.entity";

export abstract class CourseTeacherRepository {

    abstract createRelation(courseId: string, userId: string): Promise<any>

    abstract updateQualification(id: string, qualification: number): Promise<any>

}