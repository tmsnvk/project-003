import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "../database/database.module";
import { FormsController } from "./forms.controller";
import { FormsService } from "./forms.service";
import { formsProviders } from "./forms.providers";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule
  ],
  controllers: [
    FormsController
  ],
  providers: [
    FormsService,
    ...formsProviders
  ]
})

export class FormsModule {}