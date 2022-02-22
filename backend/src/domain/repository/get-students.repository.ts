import { UserModel } from '../model/user.model';

export abstract class GetStudentsRepository {
    abstract getStudents(): Promise<UserModel[]>
}