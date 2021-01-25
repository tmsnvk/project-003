import { HttpService, Injectable } from "@nestjs/common";
import { catchError, map } from "rxjs/operators";
import { GetDataDto, GetDataParams } from "./data.dto";

@Injectable()
export class DataService {
  constructor(
    private httpService: HttpService,
  ) {}

  getData(params: GetDataParams) {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`).pipe(
      map(({ data }) => {
        const transformedData: GetDataDto = {
          name: data.name,
          id: data.id,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1]?.type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        };

        return transformedData; 
      }),
      catchError((error) => {
        throw `===> The error is - ${error} <===`;
      })
    );
  };
}