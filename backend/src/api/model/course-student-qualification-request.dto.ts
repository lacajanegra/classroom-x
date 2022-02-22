import { IsNotEmpty } from "class-validator";

export class CourseStudentQualificationRequestDto {

    @IsNotEmpty()
    readonly qualification: number

}