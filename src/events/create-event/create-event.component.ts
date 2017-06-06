import { EventService } from 'events/shared/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) {

   }

   saveEvent(formValues) {
     this.eventService.saveEvent(formValues);
     this.isDirty = false;
     this.router.navigate(['/events']);
   }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
