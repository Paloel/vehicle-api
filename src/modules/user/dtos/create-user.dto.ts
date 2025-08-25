import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: "paloel", description: 'username'})
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({example: "Pass123!", description: 'password'})
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({example: "user@gmail.com", description: 'email'})
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({example: "true", description: 'boolean'})
  @IsBoolean()
  @IsOptional()
  active?: boolean;
}