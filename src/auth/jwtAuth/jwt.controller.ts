import { CreateAuthJwtDto } from './dto/create-auth-jwt.dto';
import { UpdateAuthJwtDto } from './dto/update-auth-jwt.dto';

import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { JwtServiceAuth } from './jwt.service';
import { JwtGuardAuth } from '../guards/jwt.guard'; // Importar el Guard

@Controller('jwt')
export class JwtControllerAuth {
  constructor(private readonly authJwtService: JwtServiceAuth) {}

  // Ruta pública para login (NO se protege con el guard)
  // Método login
  @Post('login')
  login(@Body() loginData: any) {
    // Suponiendo que el loginData tenga estos valores, puedes asignarlos a los campos del User.
    const payload = {
      email: loginData.email, // Asegúrate de que `loginData` tenga `email`, `role`, `status`.
      role: loginData.role,
      status: loginData.status,
    };

    return this.authJwtService.generateToken(payload);
  }

  // Ruta protegida con JWT (Ejemplo de perfil de usuario)
  @Get('profile')
  @UseGuards(JwtGuardAuth) // Protege esta ruta con el guard
  getProfile(@Req() req) {
    return { message: 'Ruta protegida', user: req.user };
  }
}
