import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailerModuleOptionsInterface, MailerOptionsInterface } from "./email.interface";

@Injectable()
export class MailerConfigModule implements MailerOptionsInterface {
  constructor(
    private readonly configService: ConfigService
  ) {}

  createMailerOptions(): MailerModuleOptionsInterface {
    return {
      transport: {
        host: this.configService.get<string>("nodemailer.host"),
        port: this.configService.get<string>("nodemailer.post"),
        ignoreTLS: { rejectUnauthorized: false },
        secure: true,
        auth: {
          user: this.configService.get<string>("nodemailer.user"),
          pass: this.configService.get<string>("nodemailer.pass")
        }
      }
    }
  }
}