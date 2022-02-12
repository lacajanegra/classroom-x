import { Injectable } from '@nestjs/common';
import { PasswordService } from '../password.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BCryptPasswordService implements PasswordService {

    async createHash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(password, salt)
    }

    async validate(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }

}