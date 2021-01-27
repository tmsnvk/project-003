import { Controller, Get, Param } from "@nestjs/common";
import { DataService } from "./data.service";
import { GetDataParams } from "./data.dto";

@Controller("/pokemon/data/")
export class DataController {
  constructor(
    private readonly dataService: DataService
    ) {}

  @Get(":id")
  getData(@Param() params: GetDataParams) {
    return this.dataService.getData(params);
  }
}