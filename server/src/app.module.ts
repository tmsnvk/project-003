import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import configuration from "./config/configuration";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { DataModule } from "./data/data.module";
import { FormsModule } from "./forms/forms.module";
import { MailerConfigService } from "./email/email.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MailerModule.forRootAsync({
      useClass: MailerConfigService
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