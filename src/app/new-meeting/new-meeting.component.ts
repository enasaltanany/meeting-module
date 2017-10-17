import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';

@Component({
  selector: '[app-new-meeting]',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})

export class NewMeetingComponent implements OnInit {

	  public members: MeetingMember[];

  constructor(private MemberService: MemberServiceService) { }

  ngOnInit() {

    this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
    this. members=member;
    console.log("new meeting component:", member[0].memberName);
    }) 
  }

}
