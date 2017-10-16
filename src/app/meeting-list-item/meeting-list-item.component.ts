import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MeetingMember } from '../Interface';
import { MeetingModel } from '../Interface';
import {statusPipe}  from './status-pipe.pipe';



<<<<<<< HEAD
=======

>>>>>>> 2c790d526110725f2eeebb82b5340a332f8f1d5c
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

<<<<<<< HEAD
  


  constructor(public activeModal: NgbModal) { }
=======
  constructor( ) { }
>>>>>>> 2c790d526110725f2eeebb82b5340a332f8f1d5c

  ngOnInit() {
  }

    expandClicked() {
    this.expand.next(this.meeting);
  }

<<<<<<< HEAD

open(content) {
  console.log(content);
    this.activeModal.open(content, {windowClass: 'no-opacity'});
  }
=======
>>>>>>> 2c790d526110725f2eeebb82b5340a332f8f1d5c





}
