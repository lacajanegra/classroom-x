export abstract class  DelCourseService {
    abstract execute(id: string, userId: string) : Promise<void> 
}