import { Injectable } from '@nestjs/common';
import { CreateFormDto } from "./forms.dto";

@Injectable()
export class FormsService {
  signup(createFormDto: CreateFormDto) {
    return 'This action adds a new form';
  }

  contact(createFormDto: CreateFormDto) {
    return `This action returns all forms`;
  }
}
