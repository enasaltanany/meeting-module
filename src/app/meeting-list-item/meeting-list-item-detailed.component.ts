import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember , MeetingModel } from '../Interface';
import { MemberServiceService} from '../Services/Members/member-service.service';

@Component({
  selector: '[app-meeting-list-item-detailed]',
  templateUrl: './meeting-list-item-detailed.component.html',
  styleUrls: ['./meeting-list-item-detailed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MeetingListItemDetailedComponent implements OnInit {

  @Input()
  meeting;

 

  constructor() { }

  ngOnInit() {
  	console.log(this.meeting.members);
  }

}
