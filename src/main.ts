import { NestFactory } from '@nestjs/core';
import { FootballModule } from './football/football.module'; 

async function bootstrap() {
  const app = await NestFactory.create(FootballModule);
  await app.listen(3000);
}
bootstrap();
