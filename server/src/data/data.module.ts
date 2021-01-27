import { HttpModule, Module } from "@nestjs/common";
import { DataService } from "./data.service";
import { DataController } from "./data.controller";

@Module({
  imports: [
    HttpModule
  ],
  controllers: [
    DataController
  ],
  providers: [
    DataService
  ]
})

export class DataModule {}