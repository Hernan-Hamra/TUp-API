import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MyJwtService } from './jwt.service';
import { JwtController } from './jwt.controller';
import { ConfigModule, ConfigService } from '@nestjs/config'; // 👈 Importamos ConfigModule y ConfigService
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    ConfigModule, // 👈 Agregamos ConfigModule para manejar variables de entorno
    forwardRef(() => UsersModule), // Usamos forwardRef() para evitar dependencia circular
    JwtModule.registerAsync({
      imports: [ConfigModule], // 👈 Importamos ConfigModule para usar ConfigService
      inject: [ConfigService], // 👈 Inyectamos ConfigService
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'), // 👈 Obtenemos la clave secreta de .env
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION') || '4h', // 👈 Configuramos la expiración
        },
      }),
    }),
  ],
  controllers: [JwtController],
  providers: [MyJwtService],
  exports: [MyJwtService, JwtModule], // 👈 Exportamos MyJwtService y JwtModule si otros módulos lo usan
})
export class MyJwtModule {}
