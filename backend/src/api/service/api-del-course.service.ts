import { DelCourseService } from "src/domain/use-case/course/del-course/del-course.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiDelCourseService {

    constructor(private readonly delCourseService: DelCourseService) { }

    async execute(id: string): Promise<void> {
        return await this.delCourseService.execute(id)
    }

}
