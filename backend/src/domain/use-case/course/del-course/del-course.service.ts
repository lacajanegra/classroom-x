export abstract class  DelCourseService {
    abstract execute(id: string) : Promise<void> 
}