import { BadRequestException, Injectable, Inject } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { Model } from "mongoose";
import { ContactFormDto, SignupFormDto } from "./forms.dto";
import { ContactFormInterface, SignupFormInterface } from "./forms.interface";
import { contactFormModel, signupFormModel } from "./forms.helpers.constants";
import { getContactTemplate, getSignupTemplate } from "./forms.helpers.emailTemplates";

@Injectable()
export class FormsService {
  constructor(
    @Inject(signupFormModel)
      private signupFormModel: Model<SignupFormInterface>,
    @Inject(contactFormModel)
    private contactFormModel: Model<ContactFormInterface>,
    private readonly mailerService: MailerService
  ) {}

  async signupform(body: SignupFormDto): Promise<SignupFormInterface> {
    try {
      const createdSignupForm = new this.signupFormModel(body);
      await createdSignupForm.save();

      return this.mailerService.sendMail({
        to: body.email,
        bcc: "ckpd@tamasnovak.net",
        from: "ckpd@tamasnovak.net",
        subject: "Received Your Signup Request",
        text: null,
        html: getSignupTemplate(body),
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async contactform(body: ContactFormDto): Promise<ContactFormInterface> {
    try {
      const createdContactForm = new this.contactFormModel(body);
      await createdContactForm.save();

      return this.mailerService.sendMail({
        to: body.email,
        bcc: "ckpd@tamasnovak.net",
        from: "ckpd@tamasnovak.net",
        subject: "Received Your Contact Request",
        text: null,
        html: getContactTemplate(body),
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}