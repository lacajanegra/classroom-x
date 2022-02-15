import { IsNotEmpty, IsString } from "class-validator";

export class CourseStudentRequestModel {

    @IsNotEmpty()
    @IsString()
    courseId: string

}