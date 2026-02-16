import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  floorPlanUrl: string;
}
