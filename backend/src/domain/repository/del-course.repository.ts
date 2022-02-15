export abstract class DelCourseRepository {
    abstract delCourse(id: string): Promise<boolean>
}