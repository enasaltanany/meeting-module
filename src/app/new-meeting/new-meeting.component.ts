import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember , Objectives } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormBuilder, FormGroup, Validators , NgModel} from '@angular/forms';



@Component({
  selector: '[app-new-meeting]',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})

export class NewMeetingComponent implements OnInit {


public myOptions: IMultiSelectOption[];


public members: MeetingMember[];
public Objectives :Objectives[];

 Objective={

   content:" ",
 }
 
  formgroup: FormGroup;                     
  meeting_title:string = '';
	 

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder) {
   
    this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });
  }


  ngOnInit() {

    this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
    this. members=member;
    console.log("new meeting component:", member);
    }) 

    // this.myOptions
  }

}
