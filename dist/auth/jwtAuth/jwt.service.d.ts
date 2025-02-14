import { JwtService } from '@nestjs/jwt';
interface User {
    email: string;
    role: string;
    status: boolean;
}
export declare class MyJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(user: User): string;
    validateToken(token: string): {
        success: boolean;
        data: any;
        message?: undefined;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        data?: undefined;
    };
}
export {};
