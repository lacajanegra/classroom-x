import { Injectable } from "@nestjs/common";
import { StudentModel } from 'src/domain/model/student.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataStudentMapper {

    fromEntityToModel(entity: UserEntity): StudentModel {

        if (!entity) {
            return undefined
        }

        const { id, name, email } = entity
        const model: StudentModel = {
            id: id,
            name: name,
            email: email
        }

        return model
    }

}