import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarModelDto {

  @ApiProperty({example: "Celta", description: 'describe'})
  @IsNotEmpty()
  @IsString()
  describe: string;

  @ApiProperty({example: "2008", description: 'year'})
  @IsNotEmpty()
  @IsString()
  year: string;

  @ApiProperty({example: "R$25.000", description: 'price'})
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({example: "Chevrolet", description: 'brand'})
  @IsNotEmpty()
  @IsString()
  brand_id: string;
}
