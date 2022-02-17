import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common"

import { Observable } from "rxjs"
import { ROLES_KEY } from "../decorator/roles.decorator"
import { Reflector } from "@nestjs/core"
import { RoleEnum } from "src/domain/model/role.enum"
import { UserModel } from "src/domain/model/user.model"

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        
        const roles = this.reflector.getAllAndOverride<RoleEnum[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if (!roles) return true

        const req = context.switchToHttp().getRequest()
        const user: UserModel = req.user
        
        return roles.some((role) => user.roles.includes(role));
    }
}