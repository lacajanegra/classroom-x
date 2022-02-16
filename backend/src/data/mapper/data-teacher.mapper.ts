import { Injectable } from "@nestjs/common";
import { TeacherModel } from "src/domain/model/teacher.model";
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataTeacherMapper {

    fromEntityToModel(entity: UserEntity): TeacherModel {

        if (!entity) {
            return undefined
        }

        const { id, name, email } = entity
        const model: TeacherModel = {
            id: id,
            name: name,
            email: email
        }

        return model
    }

}