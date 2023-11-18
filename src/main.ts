// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);

    // Configuración de CORS
    app.enableCors({
      origin: 'http://localhost:3001', // Cambia esto según tu entorno de desarrollo
    });

    const config = new DocumentBuilder()
      .setTitle('Encuesta API')
      .setDescription('API para gestionar encuestas')
      .setVersion('1.0')
      .addTag('encuesta') // Agrega esta línea si deseas incluir un tag específico
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    await app.listen(3001);
    logger.log('Application started successfully');
  } catch (error) {
    logger.error(`Error starting the application: ${error.message}`, error.stack);
  }
}

bootstrap();
