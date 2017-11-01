import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeetingMember } from '../Interface';
import { MeetingModel } from '../Interface';
import {statusPipe}  from './status-pipe.pipe';
import { Objectives } from '../Interface';
import { MemberServiceService} from '../Services/Members/member-service.service';
import { NgbModalRef} from '@ng-bootstrap/ng-bootstrap';



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
public members: MeetingMember[];
public memberData: MeetingMember[];
modalRef:NgbModalRef;
  

constructor(public activeModal: NgbModal, private MemberService: MemberServiceService) { }

ngOnInit() {
  this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
  this.members=member;
  this.getMembers();})

}

expandClicked() {
this.expand.next(this.meeting);
}



open(content) {
  console.log(content);
  console.log(this.meeting.objectives);
  this.modalRef  = this.activeModal.open(content, {windowClass: 'no-opacity'});


  }


x(content){
  this.modalRef.close();
  }


getMembers(){
  this.memberData = new Array<MeetingMember>();
  for (var memberID of this.meeting.members) {
 
    var memberData = this.members.find(x => x.id == memberID.id);
    this.memberData.push(memberData);
    

  }


}


}




