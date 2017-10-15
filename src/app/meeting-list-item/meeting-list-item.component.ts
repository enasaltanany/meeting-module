import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MeetingModel } from '../meeting-info/meeting-info.component';
import{statusPipe}  from './status-pipe.pipe';
import {MeetingModelComponent} from'../meeting-model/meeting-model.component';


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

  constructor() { }

  ngOnInit() {
  }

  expandClicked() {
    this.expand.next(this.meeting);
  }

  openModal(){

    // ('#myModal').modal('show');
  }


}
