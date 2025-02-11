import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/users.schema'; // Asegúrate de que la ruta es correcta
import { MyJwtModule } from '../auth/jwtAuth/jwt.module'; // 👈 Importamos AuthJwtModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MyJwtModule, // 👈 Se agrega para que UsersModule pueda usar AuthJwtService
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // 👈 Exportamos UsersService si otros módulos lo necesitan
})
export class UsersModule {}
