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
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Veículos')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  async create(@Body() data: CreateVehicleDto) {
    return this.vehicleService.createVehicle(data);
  }

  @ApiOperation({summary: "Lista todos os veículos"})
  
  @ApiQuery({
    name: 'describe',
    required: false,
    description: 'nome do veículo',
  })

  @Get()
  async findAll() {
    return this.vehicleService.findAll();
  }


  @ApiResponse({status: 200, description: 'Lista de veículos retornada com sucesso.'})

  @ApiParam({name: 'id', description: 'id do veículo'})

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateVehicleDto) {
    return this.vehicleService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.vehicleService.delete(id);
  }
}
