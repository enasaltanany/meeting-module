import { Component, Input, OnInit } from '@angular/core';
import {MeetingListItemComponent} from '../meeting-list-item/meeting-list-item.component'



@Component({
  selector: 'app-meeting-model',
  templateUrl: './meeting-model.component.html',
  styleUrls: ['./meeting-model.component.css']
})
export class MeetingModelComponent implements OnInit {


  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
