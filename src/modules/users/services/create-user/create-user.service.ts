import { hasher } from '@/utils/criptography/hasher/hasher';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/modules/users/dtos/create-user/create-user.dto';
import { User } from '@/modules/users/types/user/user.type';

@Injectable()
export class CreateUserService {
  public async create(createUserDto: CreateUserDto): Promise<User> {
    const user = {
      ...createUserDto,
      password: await hasher(createUserDto.password),
    };

    return user;
  }
}
