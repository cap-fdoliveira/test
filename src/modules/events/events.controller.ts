import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('/eventos')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents() {
    return this.eventsService.getEvents();
  }
}
