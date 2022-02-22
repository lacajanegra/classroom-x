import { GetStudentsService } from './get-students.service';
import { Injectable } from '@nestjs/common';
import { GetStudentsRepository } from 'src/domain/repository/get-students.repository';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class GetStudentsUseCaseService implements GetStudentsService {

    constructor(private readonly getStudentsRepository: GetStudentsRepository) { }

    async execute(): Promise<UserModel[]> {
        return await this.getStudentsRepository.getStudents()
    }
}
