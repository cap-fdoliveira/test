import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  getEvents(): string[] {
    // Chamar endpoint eventos do projeto integração
    return ['event1', 'event2', 'event3'];
  }
}
