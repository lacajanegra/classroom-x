import { UserModel } from 'src/domain/model/user.model';

export abstract class GetAuthUserService {
    abstract execute(id: string): Promise<UserModel>
}