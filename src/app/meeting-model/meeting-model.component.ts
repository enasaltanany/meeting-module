import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MeetingModelService } from './meeting-model.service';

import {MeetingListItemComponent} from '../meeting-list-item/meeting-list-item.component'



@Component({
  selector: '[app-meeting-model]',
  templateUrl: './meeting-model.component.html',
  styleUrls: ['./meeting-model.component.css']
})
export class MeetingModelComponent implements OnInit {

 

 

  constructor(private modalService: MeetingModelService) { }

  ngOnInit() {

  }


   

}
