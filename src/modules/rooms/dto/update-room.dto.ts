import { PartialType } from '@nestjs/swagger';
import { CreateRoomDto } from './create-room.dto';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PointDto } from './point.dto';
import { OccupantDto } from './occupant.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PointDto)
  polygon?: PointDto[];

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OccupantDto)
  occupants?: OccupantDto[];
}
