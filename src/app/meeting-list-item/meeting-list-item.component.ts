import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';
import { MeetingModel } from '../meeting-info/meeting-info.component';

@Component({
  selector: '[app-meeting-list-item]',
  templateUrl: './meeting-list-item.component.html',
  styleUrls: ['./meeting-list-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingListItemComponent implements OnInit {

  @Input()
  meeting;

  @Output()
  expand = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  expandClicked() {
    this.expand.next(this.meeting);
  }
}
