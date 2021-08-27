import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const port = process.env.PORT;
  await app.listen(port, () => {
    logger.log('App running 🔥');
    logger.log(`Server listening in http://localhost:${port}`);
  });
}
bootstrap();
