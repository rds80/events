import { ToastrService } from './../../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from "events/shared/event.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[]

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
