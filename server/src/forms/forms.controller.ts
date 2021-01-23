import { Controller, Post, Body } from '@nestjs/common';
import { FormsService } from './forms.service';

@Controller('forms')
export class FormsController {
  constructor(
    private readonly formsService: FormsService
  ) {}

  @Post()
  signup(@Body() createFormDto: CreateFormDto) {
    return this.formsService.signup(createFormDto);
  }

  @Post()
  contact(@Body() createFormDto: CreateFormDto) {
    return this.formsService.contact(createFormDto);
  }
}
