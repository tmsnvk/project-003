import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [DataModule, FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
