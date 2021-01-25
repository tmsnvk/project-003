import { IsInt, IsString, Matches, Max, Min } from "class-validator";
import { pokemonName } from "utilities/helpers/regex";

export class GetDataParams {
  @IsString()
  readonly id: string;
}

export class GetDataDto {
  @IsString()
  @Matches(pokemonName)
  readonly name: string;

  @IsInt()
  @Min(1)
  @Max(151)
  readonly id: number;

  @IsString()
  readonly typeOne: string;

  @IsString()
  readonly typeTwo: string;

  @IsInt()
  readonly hp: number;

  @IsInt()
  readonly attack: number;

  @IsInt()
  readonly defense: number;

  @IsInt()
  readonly speed: number;
}