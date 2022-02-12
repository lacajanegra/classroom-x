import { ExecutionContext, createParamDecorator } from "@nestjs/common";

import { UserModel } from 'src/domain/model/user.model';

export const GetUserId = createParamDecorator((data, context: ExecutionContext): string => {
    const req = context.switchToHttp().getRequest()
    const user : UserModel = req.user
    return user.id
})