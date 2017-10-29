import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember,Objectives  } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[app-new-meeting]',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NewMeetingComponent implements OnInit {


myOptions: IMultiSelectOption[]=[] ;
public members: MeetingMember[];
public memberData: MeetingMember[];
meetingObjectives= Array<Objectives>();
public x :string;
  



  formgroup: FormGroup;                     
  meeting_title:string = '';
	 

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder,public activeModal: NgbModal) {
   
    this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });

    this.meetingObjectives=[];
  }

  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
    }


    Add_Clear(content){
 
   this.meetingObjectives.push(content.value);
   content.value =" ";
   
  

   console.log("meetingObj" ,this.meetingObjectives)
 }
  


  ngOnInit() {


  this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
  this.members=member;

   this.myOptions = this.convertToMultiSelect();


   console.log("Members", member);

   // console.log("MultiSelect",this.convertToMultiSelect());


 })
 
} 



convertToMultiSelect() {
  var options = [];
    for (var i = 0; i < this.members.length; i++) {   
   
   options.push({ id: this.members[i].id, name: this.members[i].memberName})     

 }

   console.log("Options", this.myOptions); 
   return options;

}








}





