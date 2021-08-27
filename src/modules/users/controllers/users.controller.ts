import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user/create-user.dto';
import { CreateUserService } from '../services/create-user/create-user.service';
import { User } from '../types/user/user.type';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.createUserService.create(createUserDto);
  }
}
