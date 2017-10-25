import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember , Objectives } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormBuilder, FormGroup, Validators , NgModel} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: '[app-new-meeting]',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NewMeetingComponent implements OnInit {


public myOptions: IMultiSelectOption[];
public members: MeetingMember[];
// public Objectives :Objectives[];
meetingObjectives= Array<Objectives>();
public x :string;
 // Objective= {

 //   content:" ",
 // }
 
  formgroup: FormGroup;                     
  meeting_title:string = '';
	 

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder 
               ,public activeModal: NgbModal) {
   
    this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });

     this.meetingObjectives=[];
  }


  ngOnInit() {

    this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
    this. members=member;
    console.log("new meeting component:", member);
    }) 

    // this.myOptions

  }



 // PopUp show
  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
  }


   
// empty the input 
Add_Clear(content){

  this.meetingObjectives.push(content.value);
  content.value =" ";
  


  // console.log("content ",content.value);
  console.log("meetingObj" ,this.meetingObjectives)
  
    
 
}
}


// #1 OK now i know how to get the input value which is objective and i need to push it into array and then 
// view this array 


// this.Objectives= new Array<Objectives>();
   // // for (var content of this.Objective) {
   // this.Objectives.push(this.Objective);
   // // }
    // console.log("wwarene l console" ,this.Objective); /* this is the input value */
    // console.log("Objectives",this.Objectives);