import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importar el módulo de configuración
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ExercisesModule } from './exercises/exercises.module';
import { TrainingsModule } from './trainings/trainings.module';
import { AuthJwtModule } from './auth/jwtAuth/jwt.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Esto hace que las variables de entorno estén disponibles en toda la aplicación
    }),
    MongooseModule.forRoot(process.env.DB_URL), // Usar la variable de entorno para conectar con la base de datos
    UsersModule,
    ExercisesModule,
    TrainingsModule,
    AuthJwtModule,
  ],
})
export class AppModule {}
