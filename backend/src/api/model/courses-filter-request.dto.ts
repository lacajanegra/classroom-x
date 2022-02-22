import { IsOptional, IsString, MaxLength } from "class-validator";

export class CoursesFilterRequestDto {

    @IsOptional()
    @IsString()
    @MaxLength(40)
    readonly search?: string
}