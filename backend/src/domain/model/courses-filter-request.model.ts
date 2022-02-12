import { IsOptional, IsString, MaxLength } from "class-validator";

export class CoursesFilterRequestModel {

    @IsOptional()
    @IsString()
    @MaxLength(40)
    search?: string
}