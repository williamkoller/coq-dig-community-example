import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from '@/modules/cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    forwardRef(() => CatsModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
