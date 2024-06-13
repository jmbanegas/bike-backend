import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentOptions = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('API Diego') // Corregido aquí: cerrar correctamente la cadena de descripción
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, documentOptions);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap(); // Corregido aquí: cerrar correctamente la función bootstrap
