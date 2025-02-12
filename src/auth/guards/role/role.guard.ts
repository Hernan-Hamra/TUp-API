import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Corregir el error tipográfico aquí
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.data || !user.data.role) {
      throw new ForbiddenException(
        'Acceso denegado, no se encuentra el usuario o el rol',
      );
    }

    // Comparación corregida: user.data.role contiene el rol
    const hasRole = requiredRoles.includes(user.data.role);

    if (!hasRole) {
      throw new ForbiddenException(
        'No tienes permisos suficientes para acceder a esta ruta',
      );
    }

    return true;
  }
}
