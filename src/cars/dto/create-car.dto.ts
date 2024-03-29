import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    @MaxLength(7)
    plate: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    color: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    model: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    brand: string
}

