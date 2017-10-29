import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: '[app-new-meeting]',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})

export class NewMeetingComponent implements OnInit {


myOptions: IMultiSelectOption[]=[] ;
public members: MeetingMember[];
public memberData: MeetingMember[];

  



  formgroup: FormGroup;                     
  meeting_title:string = '';
	 

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder) {
   
    this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });
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





