/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({example: "ABC1D23", description: 'placa'})
  @IsNotEmpty()
  @IsString()
  license_plate: string;

  @ApiProperty({example: "Preto", description: 'cor'})
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({example: "2008", description: 'ano de manufatura'})
  @IsNotEmpty()
  @IsString()
  manufacture_year: string;

  @ApiProperty({example: "72.950 KM", description: 'quilometragem'})
  @IsNotEmpty()
  @IsString()
  mileage: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  car_model_id: string;
}
