import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common"

import { Observable } from "rxjs"
import { ROLES_KEY } from "../decorator/roles.decorator"
import { Reflector } from "@nestjs/core"
import { RoleEnum } from "src/domain/model/role.enum"
import { STATUS_KEY } from "../decorator/status.decorator"
import { StatusEnum } from "src/domain/model/status.enum"
import { UserModel } from "src/domain/model/user.model"

@Injectable()
export class StatusGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        
        const status = this.reflector.getAllAndOverride<StatusEnum[]>(STATUS_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if (!status) return true

        const req = context.switchToHttp().getRequest()
        const user: UserModel = req.user
        
        return status.includes(user.status);
    }
}