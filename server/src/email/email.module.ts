import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerConfigService } from "./email.service";

@Module({
  imports: [
    ConfigModule,
    ConfigService
  ],
  providers: [
    MailerConfigService,
    ConfigService
  ],
  exports: [
    MailerConfigService
  ]
})

export class EmailModule {}