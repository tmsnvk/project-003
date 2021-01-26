import { IsBoolean, IsEmail, IsIn, IsNumberString, IsString, Length, MaxLength } from "class-validator";

export class SignupFormDto {
  @IsString()
  readonly name: string;

  @IsNumberString()
  @Length(14, 14)
  readonly pokedex: string;

  @IsEmail()
  readonly email: string;

  @IsNumberString()
  readonly phone: string;

  @IsIn(["solo", "duo"])
  readonly radio: string;

  @IsBoolean()
  readonly checkbox: boolean;
}

export class ContactFormDto {
  @IsString()
  readonly name: string;

  @IsNumberString()
  @Length(14, 14)
  readonly pokedex: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(1000)
  readonly textarea: string;

  @IsBoolean()
  readonly checkbox: boolean;
}