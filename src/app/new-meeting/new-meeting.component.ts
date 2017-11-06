import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';

import { MeetingMember,Objectives  } from '../Interfaces';
import { MemberServiceService} from '../Services/Members/member-service.service';
import { FormBuilder, FormGroup, Validators , FormControl , NgForm } from '@angular/forms';
import { MultiselectDropdownModule,IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms'
import { FormsModule }   from '@angular/forms';
import { AbstractControl } from '@angular/forms';




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
  myform: FormGroup;



  constructor(private MemberService: MemberServiceService ,private FormBuilder: FormBuilder,
              public activeModal: NgbModal){
      this.meetingObjectives=[];
  }


  open(popup) {
    this.activeModal.open(popup, {windowClass: 'no-opacity'});
  }


  addClear(content){
    this.meetingObjectives.push(content.value);
    content.value =" ";
  }
  

  ngOnInit() {
    this.MemberService.GetMembers().subscribe((member: MeetingMember[])=> {
      this.members=member;
      this.myOptions = this.convertToMultiSelect();
   })

    //First Field: Text Input-Permanent
    this.myform = new FormGroup({
      name: new FormControl("" ,Validators.required)
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





