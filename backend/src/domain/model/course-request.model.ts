import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CourseRequestModel {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(40)
    name: string

}