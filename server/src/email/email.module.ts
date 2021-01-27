import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EmailService } from "./email.service";

@Module({
  imports: [
    ConfigModule,
    ConfigService
  ],
  providers: [
    EmailService
  ]
})

export class EmailModule {}