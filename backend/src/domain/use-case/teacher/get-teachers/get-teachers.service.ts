import { UserModel } from 'src/domain/model/user.model';

export abstract class GetTeachersService {
    abstract execute(): Promise<UserModel[]>
}