import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateBrandDto {
  @ApiProperty({example: "Chevrolet", description: 'nome da marca'})
  @IsString()
  @IsNotEmpty()
  describe: string;
}