import { Publisher, Subjects, TicketUpdatedEvent } from '@fortickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
