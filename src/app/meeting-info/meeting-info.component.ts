import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer2, HostListener  } from '@angular/core';
import { MeetingInfoServiceService} from '../meeting-info/meeting-info-service.service';
import { MeetingListItemComponent } from '../meeting-list-item/meeting-list-item.component';
import { MeetingListItemDetailedComponent } from '../meeting-list-item/meeting-list-item-detailed.component';


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

  toggleExpand(meeting) {
    meeting.expanded = !meeting.expanded;
  }
}

// export interface MeetingMember{
//    "id": number;
//    "memberName":string;
//    "JobTitle":string;
//    "Organizatio":string;
//  } 


export interface MeetingModel {
  "id": number;
  "meetingTitle": string;
	"organizer": string;
	"date": string;
	"location": string;
	"status": string;
  "expanded": boolean;
  "memberName":string;
  "JobTitle":string;
  "Organizatio":string;
}