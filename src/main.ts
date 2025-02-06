import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignora los datos que no están en el DTO
    }),
  );

  // 🔹 Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('TUpNestJs API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth() // Para autenticación JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
