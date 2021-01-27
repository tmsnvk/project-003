import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailerConfigModule } from "./email.service";

@Module({
  imports: [
    ConfigModule,
    ConfigService
  ],
  providers: [
    MailerConfigModule
  ]
})

export class EmailModule {}