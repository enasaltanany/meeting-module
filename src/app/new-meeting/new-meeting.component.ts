import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember } from '../Interface';
import { MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})
export class NewMeetingComponent implements OnInit {

 	public members: MeetingMember[];

       constructor(private ServiceMember: MeetingInfoServiceService) { }

       ngOnInit() {
          // the service is geeting the whole data i need another json file for members only t get members only
   	    // this.ServiceMember.getData().subscribe((members: MeetingMember[])=> {
        //      console.log("memberName:" , memb);
        //      this.members=members;
        //  })
        }

}
