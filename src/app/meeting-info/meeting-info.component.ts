import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import{MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';


@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {
 

 public meetings :MeetingModel[];

  constructor(private mInfo: MeetingInfoServiceService) { }

  ngOnInit() {
  	
  this.mInfo.getData().subscribe((meetings: MeetingModel[])=> {
   this.meetings=meetings;
  	 console.log("inside component:", meetings[0].meetingTitle);
  })
  }
}

  
export interface MeetingModel {
  "id": number;
  "meetingTitle": string;
	"organizer": string;
	"date": string;
	"location": string;
	"status": string;
}