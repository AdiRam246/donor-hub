import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  console.log(process.env.DATABASE_URL);
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);
  await appService.createDefaultRoles();
  await app.listen(3000);
}
bootstrap();
