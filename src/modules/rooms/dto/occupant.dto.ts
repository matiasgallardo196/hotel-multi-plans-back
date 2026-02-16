import { IsString, IsNotEmpty } from 'class-validator';

export class OccupantDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
