import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'http://192.168.1.31:8082',
      'https://www.wowpti.fr',
      'http://www.wowpti.fr',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3000, '0.0.0.0'); // ← IMPORTANT : écoute sur toutes les interfaces

  console.log('Backend listening on http://0.0.0.0:3000');
  console.log('DATABASE_URL =>', process.env.DATABASE_URL);
}
bootstrap();
