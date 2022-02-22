import { UserModel } from 'src/domain/model/user.model';

export abstract class GetStudentsService {
    abstract execute(): Promise<UserModel[]>
}