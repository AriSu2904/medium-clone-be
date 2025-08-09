import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/httpException.filter';
import { AllExceptionFilter } from './exceptions/allException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new AllExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
