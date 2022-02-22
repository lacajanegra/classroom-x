import { GetTeachersService } from './get-teachers.service';
import { Injectable } from '@nestjs/common';
import { GetTeachersRepository } from 'src/domain/repository/get-teachers.repository';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class GetTeachersUseCaseService implements GetTeachersService {

    constructor(private readonly getTeachersRepository: GetTeachersRepository) { }

    async execute(): Promise<UserModel[]> {
        return await this.getTeachersRepository.getTeachers()
    }
}
