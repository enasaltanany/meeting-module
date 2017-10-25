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

optionsModel: number[];

public members: MeetingMember[];
public memberData: MeetingMember[];
// public myOptions:MeetingMember[];



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
    // memberM=member;
    console.log("new meeting component:", member);

    for( var Option of this.members){

       this.members.push(Option);

} 
    
    
    }) 


  }




}
