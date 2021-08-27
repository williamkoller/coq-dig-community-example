import { Module } from '@nestjs/common';
import { CreateCatService } from '@/modules/cats/services/create-cat/create-cat.service';
import { CatsController } from '@/modules/cats/controllers/cats.controllers';
import { ListCatsService } from '@/modules/cats/services/list-cats/list-cats.service';

@Module({
  providers: [CreateCatService, ListCatsService],
  controllers: [CatsController],
})
export class CatsModule {}
