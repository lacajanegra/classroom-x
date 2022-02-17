import { ExecutionContext, createParamDecorator } from "@nestjs/common";

import { UserModel } from 'src/domain/model/user.model';

export const GetUser = createParamDecorator((data, context: ExecutionContext): UserModel => {
    const req = context.switchToHttp().getRequest()
    const user : UserModel = req.user
    return user
})