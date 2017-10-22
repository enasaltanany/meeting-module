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

public memberData: MeetingMember[];



constructor(private MemberService: MemberServiceService) {


 }

ngOnInit() {
 
  this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
  this.members=member;

  //console.log(this.members);
  this.getMembers();


})
}
getMembers(){
  this.memberData = new Array<MeetingMember>();
  for (var memberID of this.meeting.members) {
 
    var memberData = this.members.find(x => x.id == memberID.id);
    this.memberData.push(memberData);
    
    // push in for filling the Array(memberData: MeetingMember[]) by the (memberData) element 
   

  }
  
}

}