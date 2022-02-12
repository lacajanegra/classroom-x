export abstract class DelCourseRepository {
    abstract delCourse(id: string, userId: string): Promise<boolean>
}