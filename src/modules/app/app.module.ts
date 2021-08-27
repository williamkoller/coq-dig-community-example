import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from '@/modules/cats/cats.module';
import { UsersModule } from '@/modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    forwardRef(() => CatsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
