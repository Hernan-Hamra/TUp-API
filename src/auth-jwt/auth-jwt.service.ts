import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(payload: any) {
    // Verificar si la clave secreta está correctamente cargada
    console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY, // Asegúrate de usar la clave del archivo .env
    });
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY, // También es importante especificar la clave aquí
    });
  }
}
