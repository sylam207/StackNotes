import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Enable CORS for frontend
  app.enableCors({
    origin: 'https://stack-notes-q9qf.vercel.app', // Adjust to match your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
