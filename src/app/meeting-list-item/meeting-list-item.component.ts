import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MeetingMember } from '../Interface';
import { MeetingModel } from '../Interface';
import {statusPipe}  from './status-pipe.pipe';
import { Objectives } from '../Interface';




@Component({
  selector: '[app-meeting-list-item]',
  templateUrl: './meeting-list-item.component.html',
  styleUrls: ['./meeting-list-item.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MeetingListItemComponent implements OnInit {



  @Input()
  meeting;

  @Output()
  expand = new EventEmitter();


  


  constructor(public activeModal: NgbModal) { }



  ngOnInit() {
  }

    expandClicked() {
    this.expand.next(this.meeting);
  }



open(content) {
  console.log(content);
  console.log(this.meeting.objectives);
    this.activeModal.open(content, {windowClass: 'no-opacity'});
  }


}




