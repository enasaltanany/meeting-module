import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';
import { MeetingMember,Objectives,Tasks  } from '../Interfaces';
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
  meetingTasks= Array<Tasks>();
  meetingTask: Tasks;
  public x :string;
  myform: FormGroup;

  constructor(private MemberService: MemberServiceService ,
              private FormBuilder: FormBuilder,public activeModal: NgbModal) {
    this.meetingTasks=[];
  }

  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
  }

  addClear(content,date: HTMLInputElement){
    this.meetingTask = {taskContent:content.value, date:date.valueAsDate};
    this.meetingTasks.push(this.meetingTask);
    content.value =" ";
    date.value="mm/dd/yyyy";
    date.valueAsDate = null;
  }

  ngOnInit() {
    this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
      this.members=member;
      this.myOptions = this.convertToMultiSelect();
    })
    
    this.myform = new FormGroup({
        name: new FormControl(" ",Validators.required)
    });
  }

  get name() { return this.myform.get('name'); }

  convertToMultiSelect() {
    var options = [];
    
    for (var i = 0; i < this.members.length; i++) {
      options.push({ id: this.members[i].id, name: this.members[i].memberName})
    }   
    return options;
  }
}