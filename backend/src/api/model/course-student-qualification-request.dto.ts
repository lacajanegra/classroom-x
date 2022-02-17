import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CourseStudentRequestDto {

    @IsNotEmpty()
    @IsString()
    courseStudentId: string

    @IsNumber({ maxDecimalPlaces: 0 })
    @Min(0)
    @Max(7)
    qualification: number

}