import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { configuration } from "./config/configuration";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { DataModule } from "./data/data.module";
import { FormsModule } from "./forms/forms.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>("nodemailer.host"),
          port: config.get<string>("nodemailer.post"),
          ignoreTLS: { rejectUnauthorized: false },
          secure: true,
          auth: {
            user: config.get<string>("nodemailer.user"),
            pass: config.get<string>("nodemailer.pass")
          }
        }
      }),
      inject: [ConfigService],
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