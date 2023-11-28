import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT
  app.use(cookieParser())
  app.setGlobalPrefix("api")
  
  const config = new DocumentBuilder()
  .setTitle('CRM system for learning center')
  .setDescription('REST API Documentation')
  .setVersion('1.0.0')
  .addTag('Nestjs, mongoDB, mongoose')
  .build();
  
  const documet = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe())
  SwaggerModule.setup('/api/docs', app, documet);
  
  await app.listen(port,()=> {
    console.log("Olov olov 🔥🔥🔥🔥",+port);
  });
}
bootstrap();