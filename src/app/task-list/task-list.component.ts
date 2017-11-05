import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember,Objectives  } from '../Interface';
import {MemberServiceService} from '../Services/Members/member-service.service';
import { FormBuilder, FormGroup, Validators , FormControl , NgForm } from '@angular/forms';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms'
import { FormsModule }   from '@angular/forms';
import { AbstractControl } from '@angular/forms';

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
meetingObjective: Objectives;

public x :string;


// formgroup: FormGroup;                     
 // meeting_title:string = '';
 myform: FormGroup;


  constructor(private MemberService: MemberServiceService , 
    private FormBuilder: FormBuilder,public activeModal: NgbModal) { 

    this.meetingObjectives=[];
    
  }

  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
    }


    Add_Clear(content,date: HTMLInputElement){
   this.meetingObjective = {objectiveContent:content.value, date:date.valueAsDate};
   this.meetingObjectives.push(this.meetingObjective);
   
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
  this.myform = new FormGroup({
      name: new FormControl( "" ,Validators.required)
    });
 
} 
get name() { return this.myform.get('name'); }





convertToMultiSelect() {
  var options = [];
    for (var i = 0; i < this.members.length; i++) {   
   
   options.push({ id: this.members[i].id, name: this.members[i].memberName})     

 }

   console.log("Options", this.myOptions); 
   return options;

}


}




