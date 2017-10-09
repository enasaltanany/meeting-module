import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { MeetingModel } from '../meeting-info/meeting-info.component';

@Component({
  selector: '[app-meeting-list-item-detailed]',
  templateUrl: './meeting-list-item-detailed.component.html',
  styleUrls: ['./meeting-list-item-detailed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingListItemDetailedComponent implements OnInit {

  @Input()
  meeting;

  // public expanded : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
