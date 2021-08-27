import { mockCats } from '@/modules/cats/mocks/cats/mock-cats';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteCatService {
  public deleteCat(id: number): { message: string } {
    mockCats.find((cat) => cat.id === id);

    return {
      message: `Cat id: ${id} deleted with successfully`,
    };
  }
}
