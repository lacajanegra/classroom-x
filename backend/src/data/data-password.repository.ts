import * as argon2 from "argon2";

import { Injectable } from '@nestjs/common';
import { PasswordRepository } from 'src/domain/repository/password.repository';

@Injectable()
export class DataPasswordRepository implements PasswordRepository {

    async createHash(password: string): Promise<string> {
        return await argon2.hash(password)
    }

    async validate(password: string, hash: string): Promise<boolean> {
        return await argon2.verify(hash, password)
    }

}