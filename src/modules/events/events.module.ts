import { Module, forwardRef } from '@nestjs/common'
import { EventsService } from './events.service'
import { EventsController } from './events.controller'
import { AppModule } from '../../app.module'

@Module({
  imports: [forwardRef(() => AppModule)],
  providers: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
