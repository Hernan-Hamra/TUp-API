import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { MyJwtService } from '../jwtAuth/jwt.service'; // ✅ Usamos JwtService

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private readonly JwtService: MyJwtService) {} // ✅ Inyectamos JwtService

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) throw new UnauthorizedException('Token no encontrado');

    try {
      const decoded = await this.JwtService.validateToken(token); // ✅ Usamos el método de JwtServiceAuth
      console.log(decoded);
      request.user = decoded; // ✅ Guardamos el usuario en la request
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
