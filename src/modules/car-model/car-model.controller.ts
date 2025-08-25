import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateCarModelDto } from './dtos/create-car-model.dto';
import { UpdateCarModelDto } from './dtos/update-car-model.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modelo de Carro')
@UseGuards(AuthGuard)
@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Post()
  async createCarModel(@Body() data: CreateCarModelDto) {
    const carModel = await this.carModelService.create(data);
    return carModel;
  }

    @ApiOperation({summary: "Lista todos os modelos de carros"})
  @ApiBearerAuth()
  @ApiQuery({
    name: 'describe',
    required: false,
    description: 'Modelo do Carro',
  })

  @Get()
  async findAllCarModels() {
    return await this.carModelService.findAll();
  }

  @ApiResponse({status: 200, description: 'Lista de modelos retornada com sucesso.'})

  @Patch(':id')
  async updateCarModel(
    @Param('id') id: string,
    @Body() data: UpdateCarModelDto,
  ) {
    return await this.carModelService.update(id, data);
  }

  @ApiBearerAuth()

  @ApiParam({name: 'id', description: 'id do modelo'})

  @Post(':id')
  async deleteCarModel(@Param('id') id: string) {
    return await this.carModelService.delete(id);
  }
}
