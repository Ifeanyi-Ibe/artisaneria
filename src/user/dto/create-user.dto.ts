import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  readonly firstname: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}