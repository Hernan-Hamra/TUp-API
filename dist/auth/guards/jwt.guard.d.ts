import { CanActivate, ExecutionContext } from '@nestjs/common';
import { MyJwtService } from '../jwtAuth/jwt.service';
export declare class JwtGuard implements CanActivate {
    private readonly JwtService;
    constructor(JwtService: MyJwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
