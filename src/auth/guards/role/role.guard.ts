import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core'; // Para trabajar con los metadatos
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Obtener los roles permitidos de los metadatos del decorador
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      // Si no se especificaron roles en el decorador, permitimos el acceso
      return true;
    }

    // Obtener el usuario de la solicitud
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Suponiendo que el usuario está en el objeto request

    if (!user) {
      // Si no hay usuario en la solicitud, denegamos el acceso
      throw new ForbiddenException(
        'Acceso denegado, no se encuentra el usuario',
      );
    }

    // Comprobar si el rol del usuario está en los roles requeridos
    const hasRole = requiredRoles.some((role) => user.role?.includes(role));

    if (!hasRole) {
      // Si el rol del usuario no está permitido, lanzamos una excepción
      throw new ForbiddenException(
        'No tienes permisos suficientes para acceder a esta ruta',
      );
    }

    return true; // Si todo es correcto, dejamos que pase la solicitud
  }
}
