import { MyJwtService } from '../jwtAuth/jwt.service';
import { UsersService } from '../../users/users.service';
export declare class JwtController {
    private readonly myJwtService;
    private readonly userService;
    constructor(myJwtService: MyJwtService, userService: UsersService);
    login(loginData: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    getProfile(req: any): {
        message: string;
        user: any;
    };
}
