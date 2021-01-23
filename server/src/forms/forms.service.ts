import { Injectable } from '@nestjs/common';

@Injectable()
export class FormsService {
  signup(createFormDto: CreateFormDto) {
    return 'This action adds a new form';
  }

  contact() {
    return `This action returns all forms`;
  }
}
