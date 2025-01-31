
import { CreateAuthJwtDto } from './dto/create-auth-jwt.dto';
import { UpdateAuthJwtDto } from './dto/update-auth-jwt.dto';

import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { AuthJwtService } from './auth-jwt.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // Importar el Guard

@Controller('auth/jwt')
export class AuthJwtController {
  constructor(private readonly authJwtService: AuthJwtService) {}

  // Ruta pública para login (NO se protege con el guard)
  @Post('login')
  login(@Body() loginData: any) {
    const payload = { username: loginData.username }; // Ejemplo de payload
    return this.authJwtService.generateToken(payload);
  }

  // Ruta protegida con JWT (Ejemplo de perfil de usuario)
  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protege esta ruta con el guard
  getProfile(@Req() req) {
    return { message: 'Ruta protegida', user: req.user };
  }
}
