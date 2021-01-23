import { Controller, Get, Body, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get(':id')
  fetchData(@Param('id') id: string) {
    return this.dataService.fetchData(+id);
  }
}
