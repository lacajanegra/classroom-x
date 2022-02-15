import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CourseStudentRequestModel {

    @IsNotEmpty()
    @IsString()
    courseId: string

    @IsNotEmpty()
    @IsString()
    studentId: string

    @IsNumber({ maxDecimalPlaces: 0 })
    @Min(0)
    @Max(7)
    qualification: number

}