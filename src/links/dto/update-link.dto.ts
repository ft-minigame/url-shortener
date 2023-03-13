import { IsString, IsNotEmpty } from 'class-validator';
export class UpdateLinkDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
