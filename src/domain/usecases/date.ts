import { DomainEvent } from "../models/event";

export interface Event{
  getWeekends(month : number) : Event.Model[];
}

export namespace Event {
  export type Model = DomainEvent
}