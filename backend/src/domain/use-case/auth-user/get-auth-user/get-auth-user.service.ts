import { UserModel } from 'src/domain/model/user.model';
import { JwtPayloadModel } from 'src/domain/model/jwt-payload.model';

export abstract class GetAuthUserService {
    abstract execute(payload: JwtPayloadModel): Promise<UserModel>
}