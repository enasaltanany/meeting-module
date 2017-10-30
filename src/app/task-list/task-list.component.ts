import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember,Objectives  } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {


myOptions: IMultiSelectOption[]=[] ;
public members: MeetingMember[];
public memberData: MeetingMember[];
meetingObjectives= Array<Objectives>();
taskDate= Array<Objectives>();

public x :string;


formgroup: FormGroup;                     
 meeting_title:string = '';

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder,public activeModal: NgbModal) { 




this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });

    this.meetingObjectives=[];
    this.taskDate=[];
  }

  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
    }


    Add_Clear(content,date){
 
   this.meetingObjectives.push(content.value);
   this.taskDate.push(date.valueAsDate);
   content.value =" ";
   date.value="mm/dd/yyyy";
   

   
   // console.log("meetingObj" ,this.meetingObjectives);
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




