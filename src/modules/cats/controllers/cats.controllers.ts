import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDto } from '@/modules/cats/dtos/create-cat/create-cat.dto';
import { CreateCatService } from '@/modules/cats/services/create-cat/create-cat.service';
import { Cat } from '@/modules/cats/types/cat/cat.type';
import { ListCatsService } from '@/modules/cats/services/list-cats/list-cats.service';
import { DeleteCatService } from '@/modules/cats/services/delete-cat/delete-cat.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly createCatService: CreateCatService,
    private readonly listCatsService: ListCatsService,
    private readonly deleteCatService: DeleteCatService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createCatDto: CreateCatDto): Cat {
    return this.createCatService.create(createCatDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public index(): Cat[] {
    return this.listCatsService.listCats();
  }

  @Delete(':id')
  @Get()
  @HttpCode(HttpStatus.OK)
  public delete(@Param('id') id: number): { message: string } {
    return this.deleteCatService.deleteCat(id);
  }
}
