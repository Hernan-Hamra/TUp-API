import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/users.schema'; // Asegúrate de que la ruta es correcta
import { MyJwtModule } from '../auth/jwtAuth/jwt.module'; // 👈 Importamos MyJwtModule con forwardRef()

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => MyJwtModule), // 👈 Se usa forwardRef para evitar la dependencia circular
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
