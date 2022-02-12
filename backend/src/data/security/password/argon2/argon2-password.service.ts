import { Injectable } from '@nestjs/common';
import { PasswordService } from '../password.service';
import * as argon2 from "argon2";

@Injectable()
export class Argon2PasswordService implements PasswordService {

    async createHash(password: string): Promise<string> {
        return await argon2.hash(password)
    }

    async validate(password: string, hash: string): Promise<boolean> {
        return await argon2.verify(hash, password)
    }

}