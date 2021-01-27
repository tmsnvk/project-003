import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { configuration } from "./config/configuration";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { DataModule } from "./data/data.module";
import { FormsModule } from "./forms/forms.module";
import { EmailService } from "./email/email.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MailerModule.forRootAsync({
      imports: [
        ConfigModule
      ],
      useClass: EmailService
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