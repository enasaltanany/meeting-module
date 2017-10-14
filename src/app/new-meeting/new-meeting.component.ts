import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember } from '../meeting-info/meeting-info.component';
import { MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';
@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})
export class NewMeetingComponent implements OnInit {

@Input()
  


public meeting_members :MeetingMember[];

  constructor() { }

  ngOnInit() {
  }

}
