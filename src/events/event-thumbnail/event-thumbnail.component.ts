import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit() {
  }

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00am') {
      return { color: '#003300', 'font-weight': 'bold' }
    }
    return {}

  }
}
