import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MyJwtService } from '../jwtAuth/jwt.service'; // Asegúrate de que el servicio esté importado correctamente
import { JwtGuard } from '../guards/jwt.guard'; // El Guard debe estar bien importado
import { UsersService } from '../../users/users.service'; // Servicio de usuarios

@Controller('jwt')
export class JwtController {
  constructor(
    private readonly myJwtService: MyJwtService, // Servicio de JWT
    private readonly userService: UsersService, // Servicio de usuarios
  ) {}

  // Ruta pública para login
  @Post('login')
  async login(@Body() loginData: { email: string; password: string }) {
    const { email, password } = loginData;

    // Usar el email directamente, no un objeto con 'email'
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        'Credenciales incorrectas',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Validar la contraseña
    const isPasswordValid = await this.userService.validatePassword(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new HttpException(
        'Credenciales incorrectas',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Crear el payload para el token
    const payload = {
      email: user.email,
      role: user.role,
      status: user.status,
    };

    // Generar el token usando un método 'sign' en MyJwtService
    const token = await this.myJwtService.generateToken(payload); // Asumiendo que has implementado el método 'generateToken'

    // Devolver el token
    return { token };
  }

  // Ruta protegida con JWT (Ejemplo de perfil de usuario)
  @Get('profile')
  @UseGuards(JwtGuard) // Protege esta ruta con el guard
  getProfile(@Req() req) {
    return { message: 'Ruta protegida', user: req.user };
  }
}
