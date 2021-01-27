export interface MailerOptionsInterface {}

export class MailerConfigOptionsInterface {
  transport: {
    host: string;
    port: string;
    ignoreTLS: {
      rejectUnauthorized: boolean;
    }
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    }
  }
}