import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCourseRequestDto {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string

}