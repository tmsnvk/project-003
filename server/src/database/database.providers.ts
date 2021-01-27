import * as mongoose from "mongoose";
import { ConfigService } from "@nestjs/config";
import { databaseToInject } from "./database.helpers.constants";

export const databaseProviders = [
  {
    provide: databaseToInject,
    inject: [ConfigService],
    useFactory: (configService: ConfigService): Promise<typeof mongoose> => mongoose.connect(configService.get<string>("mongodb"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
]