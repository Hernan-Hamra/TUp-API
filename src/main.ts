import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();  // Carga las variables de entorno desde el archivo .env

//console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY); // Verifica que la clave secreta esté disponible

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(
     new ValidationPipe({
       whitelist: true, //ignora los datos que no estan pautados dentro del dto
     }),
   );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
