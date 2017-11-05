import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember,Objectives,Tasks  } from '../Interface';
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
meetingTasks= Array<Tasks>();
meetingTask: Tasks;

public x :string;


formgroup: FormGroup;                     
 meeting_title:string = '';

  constructor(private MemberService: MemberServiceService , private FormBuilder: FormBuilder,public activeModal: NgbModal) { 




this.formgroup = FormBuilder.group ({
    'meeting_title' : [null, Validators.required] 
    });

    this.meetingTasks=[];
    
  }

  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
    }


    Add_Clear(content,date: HTMLInputElement){
   this.meetingTask = {taskContent:content.value, date:date.valueAsDate};
   this.meetingTasks.push(this.meetingTask);
   
   content.value =" ";


   //Reset Placeholder
   date.value="mm/dd/yyyy";
   date.valueAsDate = null;



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




