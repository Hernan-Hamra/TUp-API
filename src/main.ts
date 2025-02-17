import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

async function bootstrap() {
  let httpsOptions = undefined;

  try {
    httpsOptions = {
      key: fs.readFileSync(process.env.SSL_KEY_PATH),
      cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    };
  } catch (error) {
    console.error('Error cargando los certificados HTTPS:', error.message);
    console.warn('La aplicación se iniciará sin HTTPS.');
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions, // Pasamos las opciones de HTTPS si están disponibles
  });

  // Habilitar validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignora los datos que no están en el DTO
      forbidNonWhitelisted: true, // Opcional: Lanza error si hay datos desconocidos
      transform: true, // Convierte los valores al tipo definido en los DTOs
    }),
  );

  // 🔹 Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('TuNestJs API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth() // Para autenticación JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  console.log(
    `🚀 Servidor corriendo en http${httpsOptions ? 's' : ''}://localhost:${port}`,
  );

  await app.listen(port);
}

bootstrap();
