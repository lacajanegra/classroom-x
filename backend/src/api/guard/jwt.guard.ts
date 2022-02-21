import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable, UnauthorizedException, Logger } from '@nestjs/common';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {

    private logger = new Logger('JwtGuard')

    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {

        if (!user) {
            this.logger.error(info)
            throw new UnauthorizedException();
        }

        return user;
    }
}