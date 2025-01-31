import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthJwtService } from '../auth-jwt/auth-jwt.service'; // ✅ Usamos AuthJwtService

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authJwtService: AuthJwtService) {} // ✅ Inyectamos AuthJwtService

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) throw new UnauthorizedException('Token no encontrado');

    try {
      const decoded = await this.authJwtService.validateToken(token); // ✅ Usamos el método de AuthJwtService
      console.log(decoded);
      request.user = decoded; // ✅ Guardamos el usuario en la request
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
