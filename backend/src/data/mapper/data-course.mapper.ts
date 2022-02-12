import { Injectable } from "@nestjs/common";
import { CourseModel } from "src/domain/model/course.model";
import { CourseEntity } from '../entity/course.entity';

@Injectable()
export class DataCourseMapper {

    fromEntityToModel(entity: CourseEntity): CourseModel {

        if (!entity) {
            return undefined
        }

        const { id, name } = entity
        const model: CourseModel = {
            id: id,
            name: name
        }

        return model
    }

}