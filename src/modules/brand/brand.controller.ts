import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { BrandService } from './brand.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Marca')
@UseGuards(AuthGuard)
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async create(@Body() data: CreateBrandDto) {
    return await this.brandService.create(data);
  }

  @ApiOperation({summary: "Lista todas as marcas"})
  @ApiBearerAuth()
  @ApiQuery({
    name: 'describe',
    required: false,
    description: 'nome das marcas',
  })

  @Get()
  async findAll() {
    return await this.brandService.findAll();
  }

  @ApiResponse({status: 200, description: 'Lista de marcas retornada com sucesso.'})

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBrandDto,
  ) {
    return await this.brandService.update(id, data);
  }

  @ApiBearerAuth()
  @ApiParam({name: 'id', description: 'id da marca'})

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.brandService.delete(id);
  }
}
