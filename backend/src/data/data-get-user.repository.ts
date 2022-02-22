import { DataUserMapper } from './mapper/data-user.mapper';
import { GetUserRepository } from 'src/domain/repository/get-user.repository';
import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/domain/model/user.model';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataGetUserRepository implements GetUserRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly dataUserMapper: DataUserMapper
    ) { }

    async getUserById(id: string): Promise<UserModel> {
        const entity = await this.userRepository.getUserById(id)
        return this.dataUserMapper.fromEntityToModel(entity)
    }

    async getUserByUsername(username: string): Promise<UserModel> {
        const entity = await this.userRepository.getUserByUsername(username)
        return this.dataUserMapper.fromEntityToModel(entity)
    }

}