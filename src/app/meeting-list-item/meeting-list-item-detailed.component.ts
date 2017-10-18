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
public members: MeetingMember[];

public memberData : MeetingMember[];


constructor(private MemberService: MemberServiceService) { }
ngOnInit() {
 
  this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
  this.members=member;
  //console.log(this.members);
  this.getMembers();

})
}
getMembers(){
  for (var memberID of this.meeting.members) {
    // console.log(memberID);
    // console.log(this.members.find(x => x.id == memberID.id));
    var memberData = this.members.find(x => x.id == memberID.id);

    console.log(memberData);
  }
}

}