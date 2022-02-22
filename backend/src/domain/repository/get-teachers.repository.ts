import { UserModel } from '../model/user.model';

export abstract class GetTeachersRepository {
    abstract getTeachers(): Promise<UserModel[]>
}