import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailerConfigOptionsInterface, MailerOptionsInterface } from "./email.interface";

@Injectable()
export class MailerConfigService implements MailerOptionsInterface {
  constructor(
    private readonly config: ConfigService
  ) {}

  createMailerOptions(): MailerConfigOptionsInterface {
    return {
      transport: {
        host: this.config.get<string>("nodemailer.host"),
        port: this.config.get<string>("nodemailer.post"),
        ignoreTLS: { rejectUnauthorized: false },
        secure: true,
        auth: {
          user: this.config.get<string>("nodemailer.user"),
          pass: this.config.get<string>("nodemailer.pass")
        }
      }
    }
  }
}