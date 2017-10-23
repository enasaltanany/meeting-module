import { Component, OnInit ,Input } from '@angular/core';
import { MeetingMember , Objectives } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { FormBuilder, FormGroup, Validators , NgModel} from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



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
	 

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder 
               ,public activeModal: NgbModal,) {
   
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

 // PopUp show
  open(content) {
    this.activeModal.open(content, {windowClass: 'no-opacity'});
  }

// empty the input 
clear(){
  // var memberData = this.members.find(x => x.id == memberID.id);
    // this.Objectives.push(this.Objective);
    console.log("objective" ,this.Objective); /* this is the input value */
    console.log("Objectives",this.Objectives);
  this.Objective.content =" ";
    
  }

}


// #1 OK now i know how to get the input value which is objective and i need to push it into array and then 
// view this array 

// #2 the Modal is not visible 