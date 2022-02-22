import { ConflictException, Injectable } from '@nestjs/common';

import { DateUtilService } from './util/date-util.service';
import { UpdatePasswordRepository } from 'src/domain/repository/update-password.repository';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataUpdatePasswordRepository implements UpdatePasswordRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly dateUtilService: DateUtilService
    ) { }

    async updatePassword(password: string, userId: string): Promise<void> {
        const entity = await this.userRepository.getUserById(userId)

        if (!entity) {
            throw new ConflictException(`User with id ${userId} not found.`)
        }

        entity.expiration = this.dateUtilService.getExpiration()
        entity.password = password
        await this.userRepository.updateUser(entity)
    }

}