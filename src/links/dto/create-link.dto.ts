import { IsString, IsNotEmpty } from 'class-validator';
export class CreateLinkDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;
}
