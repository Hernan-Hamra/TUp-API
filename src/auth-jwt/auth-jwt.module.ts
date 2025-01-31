import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthJwtService } from './auth-jwt.service';
import { AuthJwtController } from './auth-jwt.controller';
import { ConfigModule, ConfigService } from '@nestjs/config'; // 👈 Importamos ConfigModule y ConfigService

@Module({
  imports: [
    ConfigModule, // 👈 Agregamos ConfigModule para manejar variables de entorno
    JwtModule.registerAsync({
      imports: [ConfigModule], // 👈 Importamos ConfigModule para usar ConfigService
      inject: [ConfigService], // 👈 Inyectamos ConfigService
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'), // 👈 Obtenemos la clave secreta de .env
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION') || '4h' }, // 👈 Configuramos la expiración
      }),
    }),
  ],
  controllers: [AuthJwtController],
  providers: [AuthJwtService],
  exports: [AuthJwtService, JwtModule], // 👈 Exportamos AuthJwtService y JwtModule si otros módulos lo usan
})
export class AuthJwtModule {}
