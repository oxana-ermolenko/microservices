import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@fortickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
