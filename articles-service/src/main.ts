import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './errorHandling/prisma-client-exception/prisma-client-exception.filter';
import { UnauthorizedExceptionFilter } from './errorHandling/authorization/authorization.filter';
import { NotFoundExceptionFilter } from './errorHandling/notFound/notFound.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('this is the value of DATABASEURL', process.env.DATABASE_URL);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  app.useGlobalFilters(new UnauthorizedExceptionFilter());
  app.useGlobalFilters(new NotFoundExceptionFilter());

  console.log('this is the value of DATABASEURL', process.env.DATABASE_URL);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
