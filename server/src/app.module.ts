import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import configuration from "./config/configuration";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { DataModule } from "./data/data.module";
import { FormsModule } from "./forms/forms.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MailerModule.forRoot({
        transport: {
          host: process.env.NODEMAILER_AUTH_HOST,
          port: process.env.NODEMAILER_AUTH_PORT,
          ignoreTLS: { rejectUnauthorized: false },
          secure: true,
          auth: {
            user: process.env.NODEMAILER_AUTH_USER,
            pass: process.env.NODEMAILER_AUTH_PASS
          }
        }
    }),
    DataModule,
    FormsModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})

export class AppModule {}