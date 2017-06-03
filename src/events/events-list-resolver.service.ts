
import { Resolve } from "@angular/router/router";
import { EventService } from "events/shared/event.service";
import { Injectable } from "@angular/core";

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
        
    }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}