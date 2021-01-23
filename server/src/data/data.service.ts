import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  fetchData(id: number) {
    return `This action returns a #${id} datum`;
  }
}
