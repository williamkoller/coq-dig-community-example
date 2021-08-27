import { Module } from '@nestjs/common';
import { UsersController } from '@/modules/users/controllers/users.controller';
import { CreateUserService } from '@/modules/users/services/create-user/create-user.service';

@Module({
  providers: [CreateUserService],
  controllers: [UsersController],
})
export class UsersModule {}
