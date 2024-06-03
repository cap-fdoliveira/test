import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AppService } from './app.service'
import { EventsModule } from './modules/events/events.module'

@Module({
  imports: [HttpModule, EventsModule],
  controllers: [],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
