import { IsNotEmpty, IsString } from "class-validator";

export class CourseStudentRequestDto {

    @IsNotEmpty()
    @IsString()
    readonly courseId: string

}