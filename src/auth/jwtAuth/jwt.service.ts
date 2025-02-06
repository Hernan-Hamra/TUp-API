import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Interfaz para el usuario
interface User {
  email: string;
  role: string;
  status: string;
}

@Injectable()
export class JwtServiceAuth {
  constructor(private readonly jwtService: JwtService) {}

  // Método para generar un token
  generateToken(user: User) {
    const payload = {
      email: user.email,
      role: user.role,
      status: user.status,
    };

    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET_KEY, // Asegúrate de usar la clave del archivo .env
    });
  }

  // Método para validar un token
  validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET_KEY,
      });
      return { success: true, data: decoded }; // Si el token es válido, devuelve el payload decodificado
    } catch (error) {
      console.error('Token inválido:', error); // Registrar el error
      return {
        success: false,
        message: 'Token inválido',
        error: error.message,
      }; // Devolver un mensaje de error detallado
    }
  }
}
