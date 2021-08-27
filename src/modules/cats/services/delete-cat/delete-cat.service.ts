import { mockCats } from '@/modules/cats/mocks/cats/mock-cats';

export class DeleteCatService {
  public deleteCat(id: number): { message: string } {
    mockCats.find((cat) => cat.id === id);

    return {
      message: `Cat id: ${id} deleted with successfully`,
    };
  }
}
