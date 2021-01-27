import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import * as helmet from "helmet";
import * as compression from "compression";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(compression());

  const configService: ConfigService = app.get(ConfigService);
  const handleListen = (): void => console.log(`===> project-003 server @ port ${configService.get<string>("port")}! <===`);
  app.listen(configService.get<string>("port"), handleListen);
};

bootstrap();