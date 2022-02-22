import { Injectable } from '@nestjs/common';
import { SignOutService } from './sign-out.service';

@Injectable()
export class SignOutUseCaseService implements SignOutService {
    execute() {
        throw new Error('Method not implemented.');
    }
}
