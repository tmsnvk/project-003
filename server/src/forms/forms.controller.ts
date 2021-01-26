import { Controller, Post, Body } from "@nestjs/common";
import { FormsService } from "./forms.service";
import { ContactFormDto, SignupFormDto } from "./forms.dto";

@Controller("forms")
export class FormsController {
  constructor(
    private readonly formsService: FormsService
  ) {}

  @Post("/signup")
  signupform(@Body() body: SignupFormDto) {
    return this.formsService.signupform(body);
  }

  @Post("/contact")
  contactform(@Body() body: ContactFormDto) {
    return this.formsService.contactform(body);
  }
}