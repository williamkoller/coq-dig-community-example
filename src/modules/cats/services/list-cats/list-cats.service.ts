import { Injectable } from '@nestjs/common';
import { mockCats } from '@/modules/cats/mocks/cats/mock-cats';
import { Cat } from '@/modules/cats/types/cat/cat.type';

@Injectable()
export class ListCatsService {
  public listCats(): Cat[] {
    return mockCats;
  }
}
