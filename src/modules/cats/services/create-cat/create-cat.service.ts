import { Injectable } from '@nestjs/common';
import { CreateCatDto } from '@/modules/cats/dtos/create-cat/create-cat.dto';
import { Cat } from '@/modules/cats/types/cat/cat.type';

@Injectable()
export class CreateCatService {
  public create(createCatDto: CreateCatDto): Cat {
    return createCatDto;
  }
}
